<template>
  <div>
    <!--引入头部组件-->
    <Titl>
      <h4 slot="titlesName">广播</h4>
      <img src="../assets/images/ic_group_chat_share.png" alt="" slot="titleRightPic1">
      <img src="../assets/images/ic_create_group_chat_blue.png" alt="" slot="titleRightPic2">
    </Titl>
    <!--发现-->
    <div class="find">
      <div class="find-pic">
        <img src="../assets/images/short_cut_for_group.png" alt="">
      </div>
      <div class="find-text">
        <h3>发现有趣的人</h3>
        <h6>发现他们关注更大的世界</h6>
      </div>
    </div>
    <Person name="陈苍苍"></Person>
<Person name="周杰伦"></Person>
    <Person name="刘德华"></Person>
    <person name="嘻嘻哈哈"></person>
    <br><br><br>
   <div class="selectedPerson">
<div class="changeother">
  <img src="../assets/images/ic_reshare_large.png" alt="">
  <span>换一批</span>
</div>
     <div class="changedother">
       选好了,进入广播
     </div>
   </div>
  </div>
</template>
<script>
  import Titl from './title.vue';
import Person from './page2/person.vue';
  export default {
    components: {
      Titl,
        Person
    }
  }
</script>
<style scoped>
  .find {
    display: flex;
    flex-direction: row;
  }

  .find-pic {
    width: 45%;
    text-align: right;
  }

  .find-text {
    width: 55%;
  }

  .find-pic > img {
    width: 5rem;
    height: 5rem;
  }

  .find-text {
    margin-top: 2rem;
  }

  .find-text > h3 {
    font-weight: 300;
  }

  .find-text > h6 {
    color: #ccc;
  }
  .selectedPerson{
    width: 100%;
    height: 3.5rem;
    background: #fff;
    line-height: 3.5rem;
    position: fixed;
    /*z-index: 9;*/
    bottom: 3rem;
  }
  .selectedPerson{
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;
    box-sizing: border-box;
    /*line-height: 3rem;*/
  }
  .changeother>img{
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
  }
  .changeother>span{
    color: #ccc;
  }
  .changedother{
    width: 10rem;
    height: 2.2rem;
    line-height: 2.2rem;
    text-align: center;
    background: #ccc;
    color: #fff;
    margin-top: 0.7rem;
    border-radius: 5px;
  }
</style>
