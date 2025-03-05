<template>
    <el-form 
    style="position: absolute; left:50%;"
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="auto"
    >

    <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" size="small" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" size="small" />
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit" :loading="loading">
        登录
    </el-button>
    </el-form-item>
    </el-form>
    
</template>

<script setup>
import { ref, reactive } from 'vue';
import { login } from '../api/index';
import { useRouter } from 'vue-router';

const router = useRouter();//hooks编程
const formRef = ref(null);
//收集表单数据
const form = reactive({
  username: '',
  password: ''  
});
//表单验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
}
const loading = ref(false);
const onSubmit = async () => {
    console.log(formRef.value);
  loading.value = true;
  await formRef.value.validate(async (valid) => {
    // B/S
    //发送发请求给后端
    //账号、密码数据库是否匹配
    //匹配后发送前端一个凭证  token
    //以后的请求都携带上token
    //服务器匹配 token 获取用户对象
    if (valid) {
      console.log('验证成功');
      const res  = await login(form);
    //   console.log(res);、
    if(res.data.code === 200) {
        let token = res.data.data;
        localStorage.setItem('token', token);
        router.push('/');

    }else{
        console.log(res.data.message);
    }
    } else {
      console.log('验证失败');
    }
  });
}
</script>

<style scoped>

</style>