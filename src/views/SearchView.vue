<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
const input1 = ref('')
const input2 = ref('')


const router = useRouter();

const fuzzySearch = () => {
    // 处理模糊搜索事件
    console.log('模糊搜索' + input1.value);
    router.push({ path: "fuzzy" , query: { fSearchStr: input1.value }});
};
const preciseSearch = () => {
    // 处理模糊搜索事件
    console.log('精确搜索' + input2.value);
    router.push({ path: "precise" , query: { pSearchStr: input2.value }});
};
</script>

<template>
    <main class="container">

        <el-row class="search-row">
            <el-input
                v-model="input1"
                class="el-input__placeholder"
                style="width: 600px; height: 100px"
                placeholder="模糊搜索 …… "
                @keyup.enter="fuzzySearch"
            >
                <template #prefix>
                    <el-icon class="el-input__icon"><search /></el-icon>
                </template>
            </el-input>
        </el-row>

        <el-row class="search-row">
            <el-input
                    v-model="input2"
                    class="el-input__placeholder"
                    style="width: 600px; height: 100px"
                    placeholder="精确搜索 …… "
                    @keyup.enter="preciseSearch"
            >
                <template #prefix>
                    <el-icon class="el-input__icon"><search /></el-icon>
                </template>
            </el-input>
        </el-row>


    </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平居中 */
    justify-content: center; /* 垂直居中 */
    height: 100%; /* 使得容器占据整个视口高度 */
}

.search-row {
    margin-bottom: 100px; /* 调整搜索框之间的间距 */
}
.el-input__placeholder {
    font-size: 20px; /* 修改为你想要的大小 */

}

/* 调整图标的大小 */
.el-input__icon {
    font-size: 24px; /* 修改为你想要的大小 */
}
</style>
