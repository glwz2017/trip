<template>
  <div class="titles">
   <span v-show="true"><slot name="titlesName"></slot></span>
   <div class="title-right">
     <span v-show="true"><slot name="titleRightPic1"></slot></span>
     <span v-show="true"><slot name="titleRightPic2"></slot></span>
   </div>
  </div>
</template>
<style scoped>
  .titles{
    position: relative;
    height: 1.5rem;
    border-bottom: 1px solid #ccc;
  }
 .titles h4{
   text-align: center;
   line-height: 1.5rem;
   font-size: 0.8rem;
 }
  .title-right img{
    width: 1rem;
    height: 1.2rem;
    line-height: 1.2rem;
    padding-right: 1rem;
    margin-top: 0.2rem;
  }
  .title-right{
    height: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
