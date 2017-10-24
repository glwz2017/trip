<template>
  <div class="top">
    <div class="pic">
      <input type="text" class="search" placeholder="影视 图片 唱片 小组等">
    </div>
    <img src="../assets/images/ic_chat_white.png" alt="" class="pic-right">
  </div>
</template>
<style scoped>
  .top{
    width: 100%;
    height: 3rem;
    background: #42c055;
  }
  .pic .search{
    width: 85%;
    height: 1.6rem;
    border-radius:5px;
    margin-top: 1.2rem;
    margin-left:-0.6rem;
    text-indent:1.8rem;
  }
  .pic::before{
    display: inline-block;
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    background: url("../assets/images/ic_search_gray.png");
    background-size: cover;
    position: relative;
    left: 0.8rem;
    top: 0.4rem;
  }
  .pic::after{
    display: inline-block;
    content: '';
    width: 1.1rem;
    height: 1.1rem;
    background: url("../assets/images/ic_scan_gray.png");
    background-size: cover;
    position: relative;
    right: 1.8rem;
    top: 0.4rem;
  }
  .pic-right{
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 0.2rem;
    top: 1.2rem;
  }
</style>
