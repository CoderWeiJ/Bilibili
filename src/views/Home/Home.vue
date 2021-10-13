<template>
  <!-- 头部组件 -->
  <app-header />
  <!-- 频道组件 -->
  <home-channel />
  <!-- 轮播图组件 -->
  <home-swipe />
  <!-- 视频列表 -->
  <home-video-list />
</template>

<script setup lang="ts">
// script setup 只需要导入组件，无需注册
import AppHeader from "@/components/AppHeader.vue";
import HomeChannel from "./components/HomeChannel.vue";
import HomeSwipe from "./components/HomeSwipe.vue";
import HomeVideoList from "./components/HomeVideoList.vue";
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>