<!--首页列表界面组件-->
<template>
  <div>
    <h4 class="hot">热点</h4>
    <div class="items-content">
      <div class="items-text">
        <h4>《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗</h4>
        <p class="assess">此影评送给那些不离不弃的老粉和船长杰克.斯派罗。</p>
        <p class="author">作者：女神的秋裤</p>
      </div>
      <div class="items-pic">
        <img src="../assets/images/media.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
  .hot {
    border-left: 5px #fb864a solid;
    padding-left: 1rem;
    color: #fb864a;
    font-weight: 100;
    margin: 1rem 0;
  }
  .items-content {
    width: 100%;
    display: flex;
    flex-direction:row;
    padding-left: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .items-text {
    width: 65%;
    text-align: left;
  }
  .items-pic {
    width: 25%;
    margin-left: 5%;
  }
  .items-pic>img{
    width: 100%;
  }
  .assess{
    font-size: 0.65rem;
    color: #939393;
    padding: 0.5rem 0;
  }
  .author{
    font-size: 0.7rem;
    color: #c0c0c0;
    margin-top: 0.6rem;
    padding-bottom: 0.8rem;
  }
</style>
