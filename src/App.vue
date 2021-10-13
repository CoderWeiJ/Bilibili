<template>
  <!-- 
  http请求中的referrer
  http请求体的header中有一个referrer字段，用来表示发起http请求的源地址信息，这个referrer信息是可以省略但是不可修改的，就是说你只能设置是否带上这个referrer信息，不能定制referrer里面的值。
  服务器端在拿到这个referrer值后就可以进行相关的处理，比如图片资源，可以通过referrer值判断请求是否来自本站，若不是则返回403或者重定向返回其他信息，从而实现图片的防盗链。上面出现403就是因为，请求的是别人服务器上的资源，但把自己的referrer信息带过去了，被对方服务器拦截返回了403。
  在前端可以通过meta来设置referrer policy(来源策略)，具体可以设置哪些值以及对应的结果参考这里。所以针对上面的403情况的解决方法，就是把referrer设置成no-referrer，这样发送请求不会带上referrer信息，对方服务器也就无法拦截了。
 -->

  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
</style>
