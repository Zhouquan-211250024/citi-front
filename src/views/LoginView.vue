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
                        <el-form :model="form">
                            <div class="input-field">
                                <el-input v-model="form.uname" style="height: 50px" placeholder="User" />
                            </div>
                            <div class="input-field">
                                <el-input
                                    v-model="form.password"
                                    type="password"
                                    placeholder="Password"
                                    style="height: 50px"
                                    show-password
                                />
                            </div>
                            <div class="submit">
                                <el-form-item>
                                    <el-button type="primary" @click="onsubmit" class="long-button">Sign in</el-button>
                                </el-form-item>
                            </div>
                            <div class="signup-link">
                                Don't have an account? <a href="/register">Sign up</a>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {submitLogin} from "@/api";
import router from "@/router";


const form = reactive({
    uname: '',
    password: '',
});

const onsubmit = () => {
    router.push("/search");
    // submitLogin(form.uname, form.password).then(
    //     res => {
    //         if (res.error) {
    //             console.error('登录出错：', res.error);
    //         } else {
    //             console.log('登录成功，响应数据：', res.data);
    //             router.push("/search");
    //         }
    //     }
    //
    // )
    //     .catch(error => {
    //     console.error('发生错误：', error);
    // });
}

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

.signup-link{
    display: flex;
    justify-content: center;
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
