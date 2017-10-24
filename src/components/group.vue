<template>
  <div>
    <Titl>
      <h4 slot="titlesName">小组</h4>
      <img src="../assets/images/ic_group_search.png" alt="" slot="titleRightPic1">
      <img src="../assets/images/ic_create_group_chat_blue.png" alt="" slot="titleRightPic2">
    </Titl>
    <!--banner图片-->
    <div class="banner-picture">
<h4>418832个小组等你来玩</h4>
      <p class="join-now">立即选择加入吧</p>
      <p class="interesting">根据你的兴趣推荐</p>
    </div>
    <!--精选推荐-->
    <div class="beautiful-select">
      <p>精选推荐</p>
    </div>
    <!--影视-->
    <div class="video">
      <hr>
      <span>影视</span>
    </div>
    <VideoLists ></VideoLists>
    <VideoLists ></VideoLists>
    <VideoLists ></VideoLists>
    <br><br><br>
  </div>
</template>
<script>
  import Titl from './title.vue';
  import VideoLists from './page3/videoLists.vue';
  export default{
    components:{
      Titl,
      VideoLists
    }
  }
</script>
<style scoped>
  .banner-picture{
    width: 100%;
    height: 8rem;
  }
  .banner-picture{
    background: url("../assets/images/ic_group_banner.png")no-repeat;
    background-size:cover;
  }
  .banner-picture>h4{
    text-align: center;
  padding-top: 3rem;
  }
  .banner-picture>.join-now{
    text-align: center;
    color: #ccc;
    font-size: 0.9rem;
  }
  .interesting{
   padding-top: 1rem;
    margin-left: 1rem;
    font-size: 0.7rem;
    color: #ccc;
  }
  .beautiful-select{
    width: 95%;
    height: 4rem;
    background: url("../assets/images/ic_rec_group_banner_6.png");
    background-size: cover;
    margin: 0 auto;
  }
  .beautiful-select>p{
    padding-top: 2.2rem;
    color: #fff;
    padding-left: 1rem;
    font-size: 0.8rem;
  }
  .video{
    margin-top: 2rem;
    text-align: center;
    position: relative;
  }
  .video>span{
    position: absolute;
    display: inline-block;
    width: 4rem;
    height: 1.1rem;
    top:-0.7rem;
    left: 40%;
    background: #fff;
    text-align: center;
    line-height: 1.1rem;
  }
</style>
