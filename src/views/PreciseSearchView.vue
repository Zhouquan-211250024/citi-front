<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import { ref } from 'vue';
import axios from 'axios';
const route = useRoute()
const router = useRouter()
let companyInfo = {
    companyName: '示例公司',
    legalRepresentative: '张三',
    phone: '123-456-7890',
    email: 'contact@example.com',
    website: 'www.example.com',
    address: '中国某市某区某路123号',
    registrationDate: '2024-03-16',
    logo: 'https://pic.ntimg.cn/file/20220310/12291932_160934584105_2.jpg'
};
const showModal = ref(false);
const imageUrl = ref('');


// 关闭模态窗口的函数
function closeModal() {
    showModal.value = false;
}
// 返回HomePage.vue的函数
function goBack() {
    router.push('/search')
}
function show_cca() {
    // axios.post('/precise/cca')
    //     .then(response => {
    //         imageUrl.value = response.data; // 假设response.data是图片的URL
    //         showModal.value = true; // 显示模态窗口
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    imageUrl.value = 'https://pic.ntimg.cn/file/20220310/12291932_160934584105_2.jpg'
    showModal.value = true;
}
function show_aae() {
    imageUrl.value = 'https://pic.ntimg.cn/file/20220310/12291932_160934584105_2.jpg'
    showModal.value = true;
}
function show_lad() {
    imageUrl.value = 'https://pic.ntimg.cn/file/20220310/12291932_160934584105_2.jpg'
    showModal.value = true;
}
function show_ffa() {
    imageUrl.value = 'https://pic.ntimg.cn/file/20220310/12291932_160934584105_2.jpg'
    showModal.value = true;
}
function show_pra() {
    imageUrl.value = 'https://pic.ntimg.cn/file/20220310/12291932_160934584105_2.jpg'
    showModal.value = true;
}
function report() {
    router.push('/report')
}
const pSearchStr = route.query.pSearchStr;
axios.post('/home/precise', {
    company_name: pSearchStr
})
    .then(response => {
        // 将返回的数据赋值给companyInfo
        companyInfo = {
            companyName: response.data.name,
            legalRepresentative: response.data.legal_person,
            phone: response.data.phone,
            email: response.data.email,
            website: response.data.website,
            address: response.data.address,
            registrationDate: response.data.established_date,
            logo: response.data.icon_url
        };
        // 现在companyInfo包含了从后端接口返回的数据
        console.log(companyInfo);
    })
    .catch(error => {
        console.error('Error:', error);
    });
</script>

<template>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <img :src="imageUrl" class="pdf" alt="Image" />
        </div>
    </div>
    <div class="report_button-container">
        <button class="report_button" @click="report">分析报告</button>
    </div>
    <main>
        <main class="main-content">
<!--            <el-row>-->
<!--                &lt;!&ndash; 返回HomePage.vue的按钮 &ndash;&gt;-->
<!--                <button class="back-button" @click="goBack">←</button>-->
<!--            </el-row>-->
            <el-row>
                <div class="company-display">
                    <!-- logo图片 -->
                    <img :src="companyInfo.logo" class="logo" alt="Company Logo" />
                    <div class="vertical-line"></div>
                    <!-- 公司信息 -->
                    <div class="company-info">
                        <p><strong>公&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;司&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> {{ companyInfo.companyName }}</p>
                        <p><strong>法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> {{ companyInfo.legalRepresentative }}</p>
                        <p><strong>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> {{ companyInfo.phone }}</p>
                        <p><strong>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> {{ companyInfo.email }}</p>
                        <p><strong>官&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> <a :href="'https://www.bing.com/'"> {{ companyInfo.website }}</a></p>
                        <p><strong>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> {{ companyInfo.address }}</p>
                        <p><strong>注册日期&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</strong> {{ companyInfo.registrationDate }}</p>
                        <!-- ... 其他信息 ... -->
                    </div>
                </div>
            </el-row>
            <el-row class="button-grid">
                <button class="grid-item grid-item-cca" @click="show_cca">可比公司分析</button>
                <button class="grid-item grid-item-aae" @click="show_aae">资产及权益</button>
                <button class="grid-item grid-item-lad" @click="show_lad">债权与债务</button>
                <button class="grid-item grid-item-ffa" @click="show_ffa">财务基础分析</button>
                <button class="grid-item grid-item-pra" @click="show_pra">初步风险提示</button>
            </el-row>
        </main>
    </main>
</template>



<style scoped>
.modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 10; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    width: 60%; /* 设置模态内容的宽度 */
    height: auto; /* 设置模态内容的高度 */
    margin: auto; /* 自动边距使其居中 */
    position: fixed; /* 固定定位 */
    top: 50%; /* 从顶部开始的位置 */
    left: 50%; /* 从左侧开始的位置 */
    transform: translate(-50%, -50%); /* 使用变换来精确居中 */
    padding: 20px; /* 内边距 */
    border: 1px solid #888; /* 边框 */
    background-color: white; /* 背景颜色 */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* 阴影效果 */
}
.modal-content img {
    width: 70%; /* 固定宽度 */
    height: auto; /* 高度自动，保持图片比例 */
    display: block;
    margin: auto;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
/* 样式代码 */
.top-nav {
    background-color: var(--el-color-primary-light-7); /* 淡蓝色背景 */
    text-align: center; /* 标题居中 */
    border-radius: 5px;
    height: 50px;
    display: flex; /* 使用Flexbox布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}

.back-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: var(--el-color-primary-light-7);
    border-color: var(--el-color-primary-light-7);
}

.logo {
    width: 300px;
    height: auto;
    padding-left: 100px;
    margin-right: 1rem; /* 在logo和信息之间添加间隔 */
    margin-left: 150px; /* 在logo和信息之间添加间隔 */
}



.main-content {
    padding: 1rem;
}

.search-title{
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
}

.company-info {
    border: 3px solid #f2f2f2; /* 设置边框宽度、样式和颜色 */
    padding: 15px; /* 添加一些内边距，使内容不会紧贴边框 */
    margin: 15px 0; /* 添加外边距，与其他元素保持距离 */
    width: 400px;
    border-radius: 8px; /* 圆角 */
    /* 可以根据需要添加其他样式，如背景色、圆角等 */
}

.company-display {
    width: auto;
    height: auto;
    display: flex; /* 启用Flexbox */
    align-items: center; /* 垂直居中 */
}


.vertical-line {
    border-left: 3px solid var(--el-color-primary-light-7); /* 添加竖线 */
    height: 200px; /* 设置竖线高度与logo相同 */
    margin: 50px 50px; /* 设置竖线两侧的间隔 */
}


.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
}

.button-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-left: 15%;
    width: 60%; /* 设置宽度为60% */
    height: 300px; /* 设置高度为300px */
}


.grid-item {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    text-align: center;
    border: none; /* 移除边框 */
    border-radius: 8px; /* 圆角 */
    transition: background-color 0.3s ease; /* 过渡效果 */
    margin: 2px;
}

.grid-item-cca {
    grid-column: span 2; /* 占据三份列，即50%宽度 */
    background-color: coral;
}
.grid-item-aae {
    grid-column: span 4; /* 占据三份列，即50%宽度 */
    background-color: orange;
}
.grid-item-lad {
    grid-column: span 2; /* 占据三份列，即50%宽度 */
    background-color: yellow;
}
.grid-item-ffa {
    grid-column: span 2; /* 占据三份列，即50%宽度 */
    background-color: pink;
}
.grid-item-pra {
    grid-column: span 2; /* 占据三份列，即50%宽度 */
    background-color: cornsilk;
}
.grid-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
    transform: translateY(-2px); /* 轻微上移 */
}
/* 添加到您的样式表中 */
.report_button-container {
    position: fixed; /* 固定定位 */
    top: 50%; /* 顶部距离视口的50% */
    right: 0; /* 右侧与视口对齐 */
    transform: translateY(-50%); /* 向上移动按钮高度的一半以实现垂直居中 */
    z-index: 1; /* 确保按钮在其他元素之上 */
}

.report_button {
    font-size: 1.2rem;
    display: block; /* 块级元素，使其可以应用宽度和高度 */
    padding: 10px 20px; /* 按钮内边距 */
    background-color: #007bff; /* 按钮背景颜色 */
    color: white; /* 文字颜色 */
    text-align: center; /* 文字居中 */
    border: none; /* 无边框 */
    cursor: pointer; /* 鼠标悬停时显示指针 */
    margin-right: 100px;
    width: 200px;
    height: 100px;
    border-radius: 8px; /* 圆角 */
    transition: background-color 0.3s ease; /* 过渡效果 */
}
.report_button:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
    transform: translateY(-2px); /* 轻微上移 */
}
.footer {
    padding: 1rem;
    border-top: 1px solid #ccc;
}
</style>
