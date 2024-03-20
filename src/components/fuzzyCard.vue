<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
    companyName: String,
    companyDescription: String,
    companyComment: String,
    avatarSrc: String
});
const handleClick = () => {
    // 打印自己的属性
    console.log("Company Name:", props.companyName);
    console.log("Company Description:", props.companyDescription);
    console.log("Company Comment:", props.companyComment);
    console.log("Avatar Src:", props.avatarSrc);
};
</script>

<template>
<!--    height: 260px-->
    <el-card style="width: 300px; height: 280px " shadow="hover" @click="handleClick">
        <template #header >
            <div style="width: 100%">
                <h2 style="font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{companyName}}</h2>
            </div>
        </template>
        <el-row style="margin-top: 0; margin-bottom: 0; align-items: center">

                <el-avatar shape="square"
                           :size="100"
                           :fit="'fill'"
                           :src="avatarSrc"/>

            <div style="width: 150px; height: 110px;  margin-left: 5px; padding: 5px; overflow: hidden;">
                <p style=" word-wrap: break-word;  overflow: hidden; text-overflow: ellipsis; max-height: 100%;">{{companyDescription}}</p>
            </div>

        </el-row>


        <template #footer >
                        <div style="width: 100%;  padding: 5px">
                            <h4 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{companyComment}}</h4>
                        </div>
        </template>
    </el-card>
</template>

<style scoped>

</style>
