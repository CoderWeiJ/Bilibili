<template>
  <div class="list">
    <app-video-item v-for="item in videoList" :key="item.id" :video="item" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import AppVideoItem from "@/components/AppVideoItem.vue";

interface IVideoItem {
  id: number;
  imgSrc: string;
  desc: string;
  playCount: string;
  commentCount: string;
  videoSrc: string;
}

const videoList = ref<IVideoItem[]>([]);
axios({
  method: "get",
  url: "/videosList",
}).then((res) => {
  console.log("视频列表: ", res.data.result);
  videoList.value = res.data.result;
});
</script>
<style lang='less' rel='stylesheet/less' scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>