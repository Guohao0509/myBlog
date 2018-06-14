<template>
  <div class="wrapper">
    <div class="content">
      <form>
        <label>
          姓名/邮箱
          <input class="form-control input-block" type="text" placeholder="请输入姓名/邮箱">
        </label>
        <label>
          密码
          <input class="form-control input-block" type="text" placeholder="请输入密码">
        </label>
      </form>
    </div>    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 400px;
    margin: 0 auto 50px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 3px;
    input {
      margin: 10px 0 20px 0;
    }
    .content {
      width: 300px;
      margin: 0 auto;
    }
  }
</style>


