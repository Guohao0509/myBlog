<template>
  <div class="tag" :class="[
    type ? 'bg-' + type : ''
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style <style lang="scss" scoped>
  .tag {
    display: inline-block;
    color: #ffffff;
    padding: 0 10px;
    height: 21px;
    font-size: 12px;
    font-weight: 600;
    line-height: 21px;
    border-radius: 2px;
    margin: 0 5px;
  }
  .bg-gray, .bg-blue-light {
    color: #333333;
  }
</style>



