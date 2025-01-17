<template>
    <el-form 
    style="position: absolute; left: 50%;"
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
  await formRef.value.validate((valid) => {
    if (valid) {
      console.log('验证成功');
    } else {
      console.log('验证失败');
    }
  });
}
</script>

<style scoped>

</style>