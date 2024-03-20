<template>
    <el-container class="layout-container-demo" style="height: 740px" >
        <el-aside width="200px" >
            <div class="sticky-bar">
                <h2 class="sticky-title">报告分析列表</h2>
            </div>
                <el-menu  >
                    <el-menu-item index="1" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 1</el-menu-item>
                    <el-menu-item index="2" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 2</el-menu-item>
                    <el-menu-item index="3" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 3</el-menu-item>
                    <el-menu-item index="4" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 4</el-menu-item>
                    <el-menu-item index="5" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 5</el-menu-item>
                    <el-menu-item index="6" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 6</el-menu-item>
                    <el-menu-item index="7" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 7</el-menu-item>
                    <el-menu-item index="8" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 8</el-menu-item>
                    <el-menu-item index="9" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 9</el-menu-item>
                    <el-menu-item index="10" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 10</el-menu-item>
                    <el-menu-item index="11" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 11</el-menu-item>
                    <el-menu-item index="12" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 12</el-menu-item>
                    <el-menu-item index="13" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 13</el-menu-item>
                    <el-menu-item index="14" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 14</el-menu-item>
                    <el-menu-item index="15" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 15</el-menu-item>
                    <el-menu-item index="16" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 16</el-menu-item>
                    <el-menu-item index="17" @click="checkReportHistory"> <el-icon><Document /></el-icon>报告 17</el-menu-item>
                </el-menu>

        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 18px">
                <div class="toolbar">
<!--                    <el-dropdown>-->
<!--                        <el-icon style="margin-right: 8px; margin-top: 1px" size="large" color="white"><setting/></el-icon>-->
<!--                        <template #dropdown>-->
<!--                            <el-dropdown-menu>-->
<!--                                <el-dropdown-item>View</el-dropdown-item>-->
<!--                                <el-dropdown-item>Add</el-dropdown-item>-->
<!--                                <el-dropdown-item>Delete</el-dropdown-item>-->
<!--                            </el-dropdown-menu>-->
<!--                        </template>-->
<!--                    </el-dropdown>-->
<!--                    <span>Tom</span>-->
                </div>
            </el-header>

            <el-main >
                <keep-alive>
                    <router-view />
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>

import { Setting, Document } from '@element-plus/icons-vue'
import router from "@/router";

const checkReportHistory = () =>{
    router.push({ path: "report"});
}


</script>

<style scoped>

.layout-container-demo .el-header {
    position: relative;
    background-color: #000; /* 设置为黑色 */
    color: #fff; /* 设置文字颜色为白色 */
}

.layout-container-demo .el-menu {
    border-right: none;
}
.layout-container-demo .el-main {
    padding: 0;
}
.layout-container-demo .sticky-bar {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
    //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* add box shadow */
}
.layout-container-demo .sticky-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    text-align: center;
}


.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
