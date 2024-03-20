<template>
    <div class="grid-container">
        <div v-for="(row, index) in gridData" :key="index" class="grid-row">
            <fuzzy-card class="card"
                        @click="checkCompanyDetail"
                v-for="(item, i) in row" :key="i"
                        :company-name="item.companyName"
                        :company-description="item.companyDescription"
                        :company-comment="item.companyComment"
                        :avatar-src="item.avatarSrc"
            />
        </div>
    </div>

    <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="800"
        @current-change="handleCurrentChange"
        style="align-items: center; justify-content: center; margin-top: 10px"
    />


</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import FuzzyCard from "@/components/fuzzyCard.vue";
import {computed} from "vue";

import { ref } from 'vue'
import router from "@/router";


const currentPage = ref(1)
const pageSize = ref(100) // TODO
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const checkCompanyDetail = () => {
    router.push("/precise")
}

const handleCurrentChange = (val: number) => {
    //TODO
    console.log(`current page: ${val}`)
}

const cardData = [
    {   companyName : "绿益生态科技有限公司",
        companyDescription : "致力于推动环保产业的发展，专注于开发和提供创新的生态科技解决方案。我们的使命是通过技术创新和可持续发展，为社会创造更清洁、更美好的生态环境。",
        companyComment : "绿益生态🤣我只会哈哈哈🤣哈哈哈哈哈哈哈",
        avatarSrc : "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    },
    {   companyName: "蓝天环保科技有限公司",
        companyDescription: "专注于研发和推广环保技术，致力于打造更清洁、更健康的生态环境。我们的目标是通过创新解决方案，为人类创造可持续的未来。",
        companyComment: "蓝天环保，让地球更蓝更美好！",
        avatarSrc : "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    },
    {   companyName: "绿色科技创新有限公司",
        companyDescription: "我们致力于绿色科技的创新与应用，为社会提供高效、环保的解决方案。我们相信科技的力量能够改善环境，创造更美好的明天。",
        companyComment: "绿色科技，让未来更美好！",
        avatarSrc : "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    },
    {   companyName: "生态时代科技有限公司",
        companyDescription: "我们致力于引领生态时代的发展，倡导可持续发展理念，推动绿色生态产业的创新与发展。",
        companyComment: "生态时代，创造绿色明天！",
        avatarSrc : "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    },
    {   companyName: "清泉科技环保有限公司",
        companyDescription: "我们专注于水资源管理和环境保护技术的研究与应用，为人类创造洁净的水源和清新的空气。",
        companyComment: "清泉科技，让环境更清新！",
        avatarSrc : "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    },
    {   companyName : "绿益生态科技有限公司",
        companyDescription : "致力于推动环保产业的发展，专注于开发和提供创新的生态科技解决方案。我们的使命是通过技术创新和可持续发展，为社会创造更清洁、更美好的生态环境。",
        companyComment : "绿益生态🤣我只会哈哈哈🤣哈哈哈哈哈哈哈",
        avatarSrc : "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    },
    {   companyName: "碧水蓝天科技发展有限公司",
        companyDescription: "致力于研发高效节能的环保科技产品，为实现碧水蓝天的梦想而努力。",
        companyComment: "碧水蓝天，追求环保梦想！",
        avatarSrc : "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    },
    {   companyName : "绿益生态科技有限公司",
        companyDescription : "致力于推动环保产业的发展，专注于开发和提供创新的生态科技解决方案。我们的使命是通过技术创新和可持续发展，为社会创造更清洁、更美好的生态环境。",
        companyComment : "绿益生态🤣我只会哈哈哈🤣哈哈哈哈哈哈哈",
        avatarSrc : "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    },
];

const gridData = computed(() => {
    const rows = [];
    const itemsPerRow = 4;
    for (let i = 0; i < cardData.length; i += itemsPerRow) {
        rows.push(cardData.slice(i, i + itemsPerRow));
    }
    return rows;
});

const route = useRoute()

const fSearchStr = route.query.fSearchStr;

</script>

<style>

.grid-container {

    display: flex;
    flex-direction: column;
    height: 90%;
    align-items: center;
    justify-content: center;


}

.grid-row {
    display: flex;
    justify-content: space-between;
    //margin-bottom: 10px; /* 可以根据需要调整行之间的间距 */
    //margin-top: 10px;
}
.card {
    margin: 10px;
}
</style>
