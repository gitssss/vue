<template>
  <!-- 网页主体内容 -->
  <div id="main" class="container">
    <!-- 1.banner广告 -->
    <div class="sub-banner">
      <!-- 图片区域 -->
      <ul class="sub-img">
        <li>
          <a href="/">
            <img src="img/banner/004.jpg">
          </a>
        </li>
        <li>
          <a href="/">
            <img src="img/banner/001.jpg">
          </a>
        </li>
        <li>
          <a href="/">
            <img src="img/banner/001.jpg">
          </a>
        </li>
        <li>
          <a href="/">
            <img src="img/banner/001.jpg">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/banner/002.jpg">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/banner/003.jpg">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/banner/004.jpg">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/banner/001.jpg'">
          </a>
        </li>
      </ul>
      <!-- 导航区域 -->
      <ul class="sub-case">
        <li class="sub-active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
    <!-- 2.我要买车(左)　& 我要卖车(右)-->
    <div class="f1 container clear">
      <!-- 左：我要买车 -->
      <div class="f1-left left">
        <b>
          <a href="#">我要买车</a>
        </b>
        <!-- 品牌列表 -->
        <ul class="clear">
          <li>
            <a href="#">
              <img src="img/car.png">
            </a>
          </li>
        </ul>
        <!-- 价格区间 -->
        <ul>
          <li>
            <a href="#">
              <img src="img/anquan.png" alt="">
              0-10W
            </a>
          </li>
          <li>
            <a href="#">
              <img src="img/anquan.png'" alt="">
              10-30W
            </a>
          </li>
          <li>
            <a href="#">
              <img src="img/anquan.png" alt="">
              30-80W
            </a>
          </li>
          <li>
            <a href="#">
              <img src="img/anquan.png" alt="">
              80W+
            </a>
          </li>
        </ul>
      </div>
      <!-- 右：我要卖车　-->
      <div class="f1-right left">
        <b><a href="#">我要卖车</a></b>
        <div>
          手机号：<input type="text" name="phone" placeholder="请输入手机号">
          <p>
            <a href="#">
              <input type="checkbox" checked name="checked">我已阅读协议
            </a>
            <a href="#" id="regist">
              我要卖车并注册
            </a>
          </p>
        </div>
      </div>
    </div>
    <!-- 3.热卖车型　-->
    <div class="f2 container">
      <p>
        <a href="">
          <b>热卖车型</b>
        </a>
      </p>
      <div>
        <!-- 服务器端循环 -->
        <!-- 热卖车型1 -->
        <div>
          <img src="">
          <p>
            <span>
              <i></i>公里/万
            </span>
            <br>
            <em><span></span>万元</em>
            <a href="#">查看</a>
            <s>新车指导价:万</s>
          </p>
        </div>

      </div>
    </div>
    <!-- 4.图片列表（里程，视野，．．．）-->
    <div class="f3 container">
      <div class="f3-1">
        <img src="img/1-1-t.jpg">
      </div>
      <div class="f3-2">
        <img src="img/1-3-t.jpg">
        <b>里程</b>
      </div>
      <div class="f3-3">
        <img src="img/5a6eadef7fa2a.jpg">
        <b>视野</b>
      </div>
      <div class="f3-4">
        <img src="img/5a6eae33d64d0.jpg">
        <b>舒适</b>
      </div>
      <div class="f3-5">
        <img src="img/5a6eae133db71.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import "@/assets/css/index.css"
  export default {

  }
</script>

<style scoped>

</style>