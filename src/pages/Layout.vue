<template>
  <div>
    <header>
      <div class="logo">
        <img :src="Logo" alt="">
      </div>
      <div class="search-menu">
        <div class="search"></div>
        <div class="menu"></div>
      </div>
    </header>
    <section>
      <nav>
        <router-link tag="li" active-class="active" to="/index/listenlist">音单</router-link>
        <router-link tag="li" active-class="active" to="/index/recommend">推荐</router-link>
        <router-link tag="li" active-class="active" to="/index/classifly">分类</router-link>
      </nav>
     <router-view></router-view>
    </section>
    <footer>
      <div class="content"><a href="#">客户端</a><i class="logo-cat"></i><a href="#">返回顶部</a></div>
      <div class="bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
    </footer>
  </div>
</template>

<script>

import Logo from "assets/logo.png";
export default {
  data () {
    return {
     Logo
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/stylus/border.styl";
  header
    height .4rem
    background #000
    padding .1rem
    display flex
    justify-content space-between
    .logo 
      width 1.02rem
      height .2rem
      img 
        width 100%
        height 100%
    .search-menu
      display flex
      >div
        background url("../assets/icons.png")
        width .22rem
        height .2rem
      .search
        margin 0 .2rem
  section 
    background #f5f5f5
    nav 
      height .44rem
      display flex
      background #fff
      $border(0 0 1px 0)
      li
        flex 1
        text-align center
        line-height .44rem
        color #9e9e9e
        margin 0 .2rem
        font-size .14rem
        &.active
          $border(0 0 4px 0, #000)
          color #000

</style>