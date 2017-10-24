<template>
  <div class="video-lists">
    <div class="head-pic">
      <img src="../../assets/images/ic_share_weibo.png" alt="">
    </div>
    <div class="video-text">
      <h4>佳片推荐  (只迷电影...</h4>
      <p>加入豆瓣你的的电影世界会变得很好很好的哟！加入豆瓣你的的电影世界...</p>
    </div>
    <div class="video-point">
      <span>612808人</span>
    </div>
    <div class="video-point-img">
      <img src="../../assets/images/ic_group_check_anonymous.png" alt="">
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  .video-lists {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    width: 100%;
    padding-left: 1rem;
    justify-content: space-between;
  }

  .head-pic {
    width: 15%;
    text-align: center;
  }

  .head-pic > img {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
  }

  .video-text {
    width: 55%;
    padding-left: 0.2rem;
    /*padding-right: 0.5rem;*/
    box-sizing: border-box;
  }

  .video-text > p {
    font-size: 0.7rem;
    color: #ccc;
  }

  .video-point {
    width: 15%;
  }

  .video-point > span {
    display: inline-block;
    width: 100%;
    height: 2rem;
    vertical-align: bottom;
    font-size: 0.5rem;
    margin-right: 1rem;
    /*padding-left: 0.2rem;*/
    padding-top: 1.5rem;
    color: #ccc;
  }

  .video-point-img {
    width: 15%;
    padding-top: 1.1rem;
    text-align: center;
  }

  .video-point-img > img {
    /*width: 1.8rem;*/
    /*height: 1.8rem;*/
    /*padding-right: 1rem;*/
    width: 1.2rem;
    height: 1.2rem;
    padding-right: 1.2rem;
    vertical-align: middle;
  }
</style>
