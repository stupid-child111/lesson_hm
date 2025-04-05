<script lang="ts" setup>
import SparkMd5 from 'spark-md5';
import { ref } from 'vue';

const fileHash = ref<String>('');
const fileName = ref<String>('');

const CHUNK_SIZE = 1024 * 1024; // 1MB
const createChunk = (file: File) => {
  let cur = 0;
  let chunkList = [];
  while(cur < file.size){
    const blob = file.slice(cur, cur + CHUNK_SIZE)
    chunkList.push(blob);
    cur += CHUNK_SIZE;
  }
  return chunkList; 
}

//hash值计算
const calculateHash = (chunks: Blob[]) => {

  return new Promise(resolve => {
          //1. 第一个和最后一个分片参与hash值计算，
      //2.中间的分片分别在前，中，后各取2字节进行hash值计算
      const targets: Blob[] = [];//存储所有参与运算的切片
      const spark = new SparkMd5.ArrayBuffer();
      
      const fileReader = new FileReader();

      chunks.forEach((chunk,index) => {
        if(index === 0 || index === chunks.length - 1){
          targets.push(chunk);
        }else{
      //2.中间的分片分别在前，中，后各取2字节进行hash值计算
      targets.push(chunk.slice(0, 2));
      targets.push(chunk.slice(CHUNK_SIZE / 2, CHUNK_SIZE / 2 + 2))
        targets.push(chunk.slice(CHUNK_SIZE - 2, CHUNK_SIZE));
        }
      })
      fileReader.readAsArrayBuffer(new Blob(targets));
      //onload 异步
      fileReader.onload = (e) => {
        spark.append((e.target as FileReader).result);
        //计算完成  输出hash值
        // console.log('hash' + spark.end());
        resolve(spark.end());  
      }
      })


}




//上传分片函数
const uploadChunk = async (chunks: Blob[],existChunks: String) => {
  const data = chunks.map((chunk, index) => {
    return {
      //上传哪个文件
      fileHash: fileHash.value,
      //上传哪个文件切片
      chunkHash: fileHash.value + '-' + index,
      chunk: chunk
    }
  })
  // 构造FormData对象
  const formDatas = data
  .filter((item) => {
    //过滤掉已经存在的切片
    existChunks.includes(item.chunkHash);
  })
  .map((item: any) => {
    const formData = new FormData();
    formData.append('fileHash', item.fileHash);
    formData.append('chunkHash', item.chunkHash);
    formData.append('chunk', item.chunk);
    return formData;
  });
  // 上传formData对象
  // console.log(formDatas);

  const max = 6; // 最大并发数
  let index = 0; // 当前上传的索引
  const taskPool: any = []; // 任务池/请求池
  while (index < formDatas.length) {
    const task = fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formDatas[index]
    })
    taskPool.splice(taskPool.findIndex((item: any) => item === task))  
    taskPool.push(task);
    if (taskPool.length === max) {
      await Promise.race(taskPool);
    }
    index++;
  }
  await Promise.all(taskPool); 
}

//通知服务端合并文件
const mergeRequest = () => {
  fetch ('http://localhost:3000/merge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fileHash: fileHash.value,
      fileName: fileName.value,
      size: CHUNK_SIZE
    })
  }).then(res => {
    alert('文件合并成功了！！！');
  }) 
}

//校验hash值  实现秒传
const verify = async () => {
     return fetch('http://localhost:3000/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fileHash: fileHash.value,
        fileName: fileName.value
      })
     })
     .then((res) => 
       res.json()
      )
     .then(res =>{
      return res;
     })
  }


//读取本地文件
const handleUpload = async (e: Event) => {
  // console.log(e.target as HTMLInputElement .files);//伪数组
  const files = (e.target as HTMLInputElement).files;
  if(!files){
    return;
  }
  //读取文件
  // console.log(files[0]);
  fileName.value = files[0].name;

  //文件分片
  const chunks = createChunk(files[0]);
  console.log(chunks);
  //上传文件 使用hash值  实现秒传  spark-md5
  //全部文件分片参与hash值计算  大文件比较耗时
  //1、web  worker


  //2、第一个和最后一个分片参与hash值计算，  中间的分片分别在前，中，后各取2字节进行hash值计算
  //保证参与计算，也不耗费很长时间

  //hash值计算
  const  hash = await calculateHash(chunks);
  // console.log(hash);
  fileHash.value = hash as String;
  
  //校验hash值
  const data = await verify();
  console.log(data);
  if(!data.data.shouldUpload){
    alert('秒传成功了！！！');
    return;
  }

  //切片上传
  // chrome  最大并发数  6个
  uploadChunk(chunks,data.data.existChunks);

  //合并 
  mergeRequest();

  
}

</script>

<template>
  <div>
    <h1>大文件上传</h1>
    <!-- 监听change事件 -->
    <input @change="handleUpload" type="file">
  </div>
</template>


<style lang="scss" scoped>

</style>