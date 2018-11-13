<template>
  <div id="header" class="container">
    <!--logo-->
    <a href="/">
      <img src="img/logo1.png">
    </a>
    <!-- 卖车，买车，服务保障，个人中心　：　列表 -->
    <ul>
      <li>
        <a href="/products">买车</a>
      </li>
      <li>
        <a href="/products">卖车</a>
      </li>
      <li>
        <a href="#">服务保障</a>
      </li>
      <li>
        <a href="#">个人中心</a>
      </li>
    </ul>
    <!-- 登录信息　&　联系电话 -->
    <p>
      欢迎您：
      <a href="#">退出</a>
      <a href="/login">
        <img src="img/user.png"> 登录
      </a>
      <b>
        <img src="img/phone.png">
        400-400-400
      </b>
    </p>
  </div>
</template>

<script>
  import "@/assets/css/base.css"
  import "@/assets/css/header.css"
  import "@/assets/css/footer.css"
  import "@/assets/css/banner.css"
  export default {
  }
</script>

<style scoped>

</style>