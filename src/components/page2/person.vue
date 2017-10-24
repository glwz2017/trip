<template>
  <div class="persons" v-show="flag">
    <span @click="fn">X</span>
    <div class="person-pic">
      <img src="../../assets/images/ic_share_qq.png" alt="">
    </div>
    <div class="person-text">
      <h4 v-text="name"></h4>
      <h6>63328人关注</h6>
      <button>关注</button>
      <p>百度新闻是包含海量资讯的新闻服务平台,真实反映每时每刻的新闻热点。您可以搜索新闻事件、热点话题、人物动态、产品资讯等,快速了解它们的最新进展</p>
      <ul class="pointgood">
        <li>
          <img src="../../assets/images/ic_fill_voted_large.png" alt="">
          <span>50</span>
        </li>
        <li>
          <img src="../../assets/images/ic_forum_topic_comment.png" alt="" class="pinglun">
          <span>29</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .persons {
    width: 95%;
    height: auto;
    margin: 20px auto;
    box-shadow: 1px 1px 3px 4px #ccc;
    display: flex;
    flex-direction: row;
    position: relative;
  }
.persons>span{
  font-size: 0.6rem;
  position: absolute;
  right: 0.3rem;
  top: 0.1rem;
}
  .person-pic {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px #ccc solid;
    margin-top: 1.5rem;
    margin-left: 0.5rem;
  }

  .person-pic > img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
.person-text{
  width: 90%;
  margin-top: 1.5rem;
  margin-left: 0.5rem;
}
  .person-text>h6{
    color: #ccc;
    font-size: 0.8rem;
    display: inline-block;
  }
  .person-text>button{
    float: right;
    margin-top: -0.8rem;
    width: 5rem;
    height: 2rem;
    margin-right: 1.3rem;
    background: #42c055;
    border: none;
    border-radius: 5px;
    color: white;
  }
  .person-text::after{
    content:'';
    display:inline-block;
    width:0;
    height:0;
    clear:both;
  }
  .person-text>p{
    font-size: 0.9rem;
   padding-top: 0.4rem;
    padding-right: 0.8rem;
  }
  .pointgood{
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    /*margin-bottom: 8rem;*/
  }
  .pointgood>li>img{
    width: 1.8rem;
    height: 1.8rem;
    vertical-align: bottom;
  }
  .pointgood .pinglun{
    width: 1.1rem;
    height: 1.1rem;
    vertical-align: bottom;
    margin-top: 0.5rem;
  }
  .pointgood>li{
    float: left;
    margin-right: 1.5rem;
  }
  .pointgood::after{
    content:'';
    display:inline-block;
    width: 0;
    height: 0;
    clear:both;
  }
</style>
<script>
 export default {
   props:['name'],
   data:function () {
     return{
       flag:true
     }
   },
   methods:{
     fn:function () {
       return this.flag = false;
     }
   }
 }
</script>
