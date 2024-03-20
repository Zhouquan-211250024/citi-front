<template>
    <div class="outer-container">
        <div class="login-container">
            <div class="image-container">
                <!-- 在这里添加您的图片 -->
                <img src="../assets/login.png" alt="your-image" />
            </div>
            <div class="content">
                <div class="welcome">
                    Welcome Back!
                </div>
                <div class="login-form">
                    <div class="input-fields">
                        <el-form
                            ref="ruleFormRef"
                            style="max-width: 600px"
                            :model="ruleForm"
                            status-icon
                            :rules="rules"
                            label-width="auto"
                            class="demo-ruleForm"
                        >
                            <div class="input-field">
                                <el-form-item prop="uname" >
                                    <el-input v-model="ruleForm.uname" style="height: 40px" placeholder="User"/>
                                </el-form-item>
                            </div>
                            <div class="input-field">
                                <el-form-item prop="pass">
                                    <el-input v-model="ruleForm.pass" style="height: 40px" placeholder="Password" type="password" autocomplete="off" />
                                </el-form-item>
                            </div>
                            <div class="input-field">
                                <el-form-item prop="checkPass">
                                    <el-input
                                        v-model="ruleForm.checkPass"
                                        type="password"
                                        autocomplete="off"
                                        style="height: 40px"
                                        placeholder="Confirm Password"
                                    />
                                </el-form-item>
                            </div>
                            <div>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm(ruleFormRef)"
                                               class="long-button">Sign up</el-button>
                                </el-form-item>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import axios from "axios";
import { ElMessage } from 'element-plus'
import {useRouter} from "vue-router";

const ruleFormRef = ref<FormInstance>()
const router = useRouter()

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码不能为空'))
    } else {
        if (ruleForm.value.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value?.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.value.pass) {
        callback(new Error("两次密码不一致"))
    } else {
        callback()
    }
}

const ruleForm = ref({
    uname: '',
    pass: '',
    checkPass: '',
})

const rules = ref<FormRules>({
    uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    pass: [{ validator: validatePass, required: true, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, required: true, trigger: 'blur' }],
});

const submitForm = () =>{
    router.push("/search")
}

// const submitForm = async (formEl) => {
//     if (!formEl) return;
//
//     const isValid = await new Promise((resolve) => {
//         formEl.validate((valid) => {
//             resolve(valid);
//         });
//     });
//
//     if (isValid) {
//         const formData = {
//             uname: ruleForm.value.uname,
//             pass: ruleForm.value.pass,
//         };
//
//         try {
//             const response = await axios.post('/user/register', formData);
//             console.log('注册成功:', response.data);
//             ElMessage({
//                 message: '注册成功',
//                 type: 'success',
//             })
//             await router.push('/login')
//         } catch (error) {
//             console.error('Registration failed:', error);
//             if (error.response) {
//                 //  用户名重复
//                 const statusCode = error.response.status;
//                 if (statusCode === 402) {
//                     ElMessage.error('用户名重复')
//                 }
//             }
//         }
//     } else {
//         console.log('Form validation failed.');
//         // 在这里处理表单验证失败后的逻辑
//     }
// };

</script>

<style scoped>
.outer-container {
    background-color: #587577/* 您想要的背景色 */;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    display: flex;
    position: fixed;
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中 */
    max-width: 95%;
    max-height: 80%;
    height: calc(100vh - 40px);
    background-color: #b1d9db; /* 设置背景颜色为淡绿色 */
    border-radius: 20px; /* 设置圆角 */
}

.content {
    display: flex; /* 设置为行布局 */
    flex-direction: column; /* 设置为垂直方向的列布局 */
    width: 50%;
    height: 100%;
    background-color: white;
    border-radius: 20px; /* 设置圆角 */
}

.welcome{
    display: flex;
    justify-content: center;
    margin-top: 20%;
    font-size: 30px; /* 增大字体大小 */
    font-weight: bold; /* 加粗字体 */
    margin-bottom: 5%;
}

.login-form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: center; /* 水平居中对齐 */
}

.input-fields {
    display: flex;
    flex-direction: column;
    align-items: center; /* 垂直居中对齐 */
}

.input-field {
    display: block; /* 设置为块级元素 */
    width: 400px;
    margin-bottom: 30px; /* 设置下方间距 */
    margin-left: auto; /* 将输入框居中 */
    margin-right: auto; /* 将输入框居中 */
}

.long-button {
    display: block; /* 变为块级元素，占据整个父元素宽度 */
    width: 100%; /* 设置宽度为父元素宽度 */
    height: 50px; /* 设置高度 */
    font-size: 24px;
    border-radius: 24px; /* 设置圆角 */
    color: black; /* 设置字体颜色为黑色 */
    background-color: #b1d9db
}

.image-container {
    /* 根据需求调整图片容器样式 */
    display: flex;
    justify-content: center;
    width: 50%
}

.image-container img {
    max-width: 90%; /* 图片最大宽度为容器宽度 */
    height: auto; /* 自动调整高度 */
}
</style>
