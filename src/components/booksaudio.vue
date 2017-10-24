<template>
  <div>
    <!--引用头部组件-->
    <Titles>
      <h4 slot="titlesName">书影音</h4>
      <img src="../assets/images/ic_group_search.png" alt="" slot="titleRightPic1">
      <img src="../assets/images/ic_create_group_chat_blue.png" alt="" slot="titleRightPic2">
    </Titles>
    <!---->
    <ul class="lists">
      <li v-for="item in arr" :class="{active:index===item.url}" @click="fk(item.url)">
        <router-link :to="item.url" v-text="item.text" :class="{actives:index===item.url}" ></router-link>
      </li>
    </ul>
   <!--渲染区域-->
    <router-view></router-view>
  </div>
</template>
<script>
  import Titles from './title.vue';
  //  导入二级路由
  import ListsName from './ListsName.vue';
  export default {
    components: {
      Titles,
      ListsName,
    },
    data:function () {
      return{
        index:'/',
        arr:[{
          url:'/booksaudio/movie',
          text:'电影'
        },{
          url:'/booksaudio/books',
          text:'读书'
        },{
          url:'/booksaudio/tv',
          text:'电视'
        },{
          url:'/booksaudio/city',
          text:'同城'
        },{
          url:'/booksaudio/music',
          text:'音乐'
        }
        ],
      }
    },
    methods:{
      fk:function (url) {
        this.index=url;
      }
    },
    created:function () {
      this.$router.push('/booksaudio/movie');
      this.index=window.location.hash.substr(1);
    }
  }
</script>
<style scoped>
  .lists {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }
  .lists li {
    float: left;
    display: inline-block;
    width: 20%;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    font-size: 0.9rem;
  }

  li {
    border-bottom: 2px solid transparent;
  }
.active{
  border-bottom: 2px solid green;
}
.actives{
  color: green;
}
  .lists::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }

</style>
