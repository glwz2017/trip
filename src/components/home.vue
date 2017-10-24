<template>
  <div>
    <!--调用顶部组件-->
    <Navs></Navs>
    <!--轮播图-->
    <!--<div class="banner">-->
      <!--<img src="../assets/images/banner/01.jpg" alt="">-->
    <!--</div>-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/images/banner/01.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner/02.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner/03.jpg" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <!--<div class="swiper-pagination"></div>-->
      <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->
      <!--&lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
    <!--调用中间组件-->
    <Items></Items>
    <Items></Items>
    <br><br><br>
  </div>
</template>
<script>
  import Navs from './nav.vue';
  import Items from './items.vue';
import '../assets/libs/swiper.min';
  export default {
//    建立父子关系引用子模板
    components: {
      Navs,
      Items,
    },
    mounted:function () {
      var mySwiper = new Swiper ('.swiper-container', {
//    direction: 'vertical',
        loop: true,
        autoplay:'3000',
        // 如果需要分页器
        grabCursor:false,
        pagination: '.swiper-pagination',
      });
    }
  }
</script>
<style scoped>
  @import "../assets/libs/swiper.min.css";
  .banner {
    width: 100%;
  }
  .swiper-slide>img{
    width: 100%;
  }
</style>
