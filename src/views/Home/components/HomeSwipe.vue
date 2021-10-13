<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    lazy-render
  >
    <van-swipe-item v-for="item in swiperList" :key="item.imgSrc">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

interface ISwiper {
  imgSrc: string;
  link: string;
}
let loading = ref(true); // 展示骨架屏
const swiperList = ref<ISwiper[]>([]);

axios({
  url: "/swiperList",
  method: "get",
}).then((res) => {
  console.log("轮播图数据", res.data.result);
  loading.value = false;
  swiperList.value = res.data.result;
});
</script>
<style lang='less' rel='stylesheet/less' scoped>
.my-swipe {
  width: 100%;
}
</style>