<template>
  <div id="app">
    <!--顶部-->
    <router-view></router-view>
    <!--底部调用-->
    <div class="toolbar">
      <router-link to="/home">
        <BottomBar text="首页" index="#/home" @send="getIndex" :sele="select"><img
          src="./assets/images/ic_tab_home_normal.png" alt="" slot="NoSelected">
          <img src="./assets/images/ic_tab_home_active.png" alt="" slot="Selected">
        </BottomBar>
      </router-link>
      <router-link to="/booksaudio">
        <BottomBar text="书影音" index="#/booksaudio" @send="getIndex" :sele="select">
          <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="NoSelected">
          <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="Selected">
        </BottomBar>
      </router-link>
      <router-link to="/broadcast">
        <BottomBar text="广播" index="#/broadcast" @send="getIndex" :sele="select">
          <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="NoSelected">
          <img src="./assets/images/ic_tab_status_active.png" alt="" slot="Selected">
        </BottomBar>
      </router-link>
      <router-link to="/group">
        <BottomBar text="小组" index="#/group" @send="getIndex" :sele="select">
          <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="NoSelected">
          <img src="./assets/images/ic_tab_group_active.png" alt="" slot="Selected">
        </BottomBar>
      </router-link>
      <router-link to="/mine">
        <BottomBar text="我的" index="#/mine" @send="getIndex" :sele="select">
          <img src="./assets/images/ic_tab_profile_female_normal.png" alt="" slot="NoSelected">
          <img src="./assets/images/ic_tab_profile_female_active.png" alt="" slot="Selected">
        </BottomBar>
      </router-link>
    </div>
  </div>
</template>

<!--顶部导航-->
<script>

  import BottomBar from './components/BottomBar.vue'

  export default {
    name: 'app',
    components: {
      BottomBar
    },
    data: function () {
      return {
        select: ''
      }
    },
    methods: {
      getIndex: function (val) {
        this.select = val;
      }
    },
    created: function () {
//     判断当前的索引值是否与刷新前的值是否保持一致
//      核心点就是，，让二级路由的路径截取到一级路径然后跟一级路径匹配,给一级路由添加相应的样式
      if (window.location.hash === '#/booksaudio/books' || window.location.hash === '#/booksaudio/movie' || window.location.hash === '#/booksaudio/tv' || window.location.hash === '#/booksaudio/city' || window.location.hash === '#/booksaudio/music') {
        this.select = window.location.hash.substr(0, 12);
      }
      else {
        this.select = window.location.hash;
      }
    }
  }
</script>

<style>
  .toolbar {
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    border-top: 1px solid #ccc;
  }
</style>
