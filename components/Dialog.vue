<template>
  <div class="dialog-wrapper" v-if="isShow">
    <div class="dialog-content">
      <div class="title">
        {{ title }}
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="foot">
        <button class="btn btn-sm btn-primary" @click="close()">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: 'TITLE'
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    close() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
    }
  }
}
</script>

<style <style lang="scss" scoped>
  .dialog-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    .dialog-content {
      width: 450px;
      margin: 70px auto 0;
      border-radius: 3px;
      background-color: #fff;
      .title {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background-color: #e6e6e6;
      }
      .body {
        height: 500px;
        padding: 10px;
        overflow-y: scroll;
      }
      .foot {
        height: 40px;
        padding: 10px;
        button {
          float: right;
        }
      }
    }
  }
</style>



