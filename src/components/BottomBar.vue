<template>
  <div class="bottom-list" @click="fn">
    <span v-show="flag"><slot name="NoSelected"></slot></span>
    <span v-show="!flag"><slot name="Selected"></slot></span>
    <p class="home" v-text="text" :class="{active:!flag}"></p>
  </div>
</template>
<script>
  export default {
    props: ['text', 'index', 'sele'],
    computed: {
      flag: function () {
        if (this.index === this.sele) {
          return false;
        }
        return true;
      }
    },
    data: function () {
      return {

      }
    },
    methods: {
      fn: function () {
//      console.log(this.index);
        this.$emit('send', this.index);
      }
    }
  }
</script>
<style scoped>
  .bottom-list {
    width: 20%;
    height: 3rem;
    float: left;
    background: #fff;
  }

  .bottom-list img {
    width: 50%;
    height: 2.1rem;
    display: block;
    margin: 0 auto;
  }

  .home {
    text-align: center;
    font-size: 0.7rem;
    padding: 0.1rem 0;
    box-sizing: border-box;
  }
  .bottom-list .active{
    color: #66ca76;
  }
</style>
