<template>
  <div>
    <div class="headers">
      <div class="pics">
        <img src="../assets/images/ic_user_info_gender.png" alt="">
      </div>
      <div class="pics-text">
<h3>畅斯基 <span><img src="../assets/images/ic_mine_female.png" alt=""></span></h3>
        <p>ID:1589520365 <span>个人主页></span></p>
        <div class="clear"></div>
        <hr class="line">
        <h6><span>关注1</span>&nbsp;&nbsp;&nbsp;<span>被关注0</span></h6>
      </div>
    </div>
    <!--tips-->
    <div class="tips">
      <img src="../assets/images/ic_mine_notification.png" alt="">
      <span class="tip">提醒</span>
      <span class="rights">></span>
    </div>
    <!---->
    <div class="notips">
      暂无提醒
    </div>
   <div class="link-pic">
     <MineList text="喜欢">
       <img src="../assets/images/ic_photo_liked.png" alt="" slot="Selected">
     </MineList>
     <MineList text="日记">
       <img src="../assets/images/ic_my_note.png" alt="" slot="Selected">
     </MineList>
     <MineList text="相册">
       <img src="../assets/images/ic_my_album.png" alt="" slot="Selected">
     </MineList>
     <MineList text="我的广播">
       <img src="../assets/images/ic_my_status.png" alt="" slot="Selected">
     </MineList>
   </div>
    <div class="link-pic">
      <MineList text="电影 · 电视">
        <img src="../assets/images/ic_my_movies_tvs.png" alt="" slot="Selected">
      </MineList>
      <MineList text="读书">
        <img src="../assets/images/ic_my_books.png" alt="" slot="Selected">
      </MineList>
      <MineList text="豆瓣时间">
        <img src="../assets/images/ic_my_music.png" alt="" slot="Selected">
      </MineList>
      <MineList text="同城活动">
        <img src="../assets/images/ic_my_events.png" alt="" slot="Selected">
      </MineList>
    </div>
    <div class="link-pic">
      <MineList text="舞台剧">
        <img src="../assets/images/ic_drama_channel_logo.png" alt="" slot="Selected">
      </MineList>
      <MineList text="日记">
        <img src="../assets/images/ic_menu_liked.png" alt="" slot="Selected">
      </MineList>
      <MineList text="豆列">
        <img src="../assets/images/ic_my_doulist.png" alt="" slot="Selected">
      </MineList>
      <MineList text="订单">
        <img src="../assets/images/ic_my_orders.png" alt="" slot="Selected">
      </MineList>
    </div>
    <br><br>
  </div>
</template>
<script>
  import MineList from './BottomBar.vue';
  export default {
    components:{
      MineList
    }
  }
</script>
<style scoped>
  .headers {
    width: 100%;
    background: url("../assets/images/live_player_bg.jpg") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pics {
    width: 20%;
    padding: 0.6rem 1rem;
    text-align: center;
  }
  .pics>img{
    width: 100%;
    height: auto;
  }
  .pics-text {
    width: 80%;
    vertical-align: middle;
    color: #fff;
 font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  .pics-text>h3>span>img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .pics-text>p{
    font-size:0.5rem;
  }
  .pics-text>p>span{
   float: right;
    padding-right: 1rem;
  }
  .pics-text .clear{
    clear: both;
  }
  .line{
    margin: 0.5rem 0;
  }
  .pics-text>h6{
    padding-bottom: 0.5rem;
  }
  /*提醒*/
  .tips{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    margin-top: 1rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .tip{
    vertical-align: top;
    font-size: 0.8rem;
  }
  .tips>img{
    width: 2rem;
    height: 2rem;
    margin-top: 0.5rem;
  }
  .rights{
    float: right;
    color: #ccc;
    padding-right: 1rem;
  }
  .tips::after{
    clear: both;
  }
  .notips{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #ccc;
  }
  .link-pic{
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }
</style>
