<template>
  <div class="index-bg">
    <div class="index-content">
      <div>
        <img class="profile" src="~/assets/image/profile_300.jpg" alt="">
      </div>
      <div class="title">
        GUOHAO'S BLOG
      </div>
      <nuxt-link to="/blog">
        <a class="gogo">GO Weber GO !</a>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
  .index-bg {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url('~/assets/image/bg.jpg');
    // background: #3b5973;
    background-size: 100%;
    .index-content {
      width: 800px;
      height: 400px;
      // background-color: rgba($color: #ffffff, $alpha: 0.6);
      margin: 200px auto 0;
      border-radius: 10px;
    }
    .profile {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .title {
      color: rgb(238, 238, 238);
      margin-top: 20px;
      font-size: 40px;
      font-weight: 600;
    }
    .gogo {
      font-size: 25px;
      font-weight: 500;
      color: rgb(238, 238, 238);
      cursor: pointer;
    }
  }
</style>

