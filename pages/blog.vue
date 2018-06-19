<template>
  <div>
    <div class="header">
      <div class="container">
        <nuxt-link to="/">
          <img class="profile" src="http://pajtmuff9.bkt.clouddn.com/profile_300.jpg" alt="">
        </nuxt-link>
        <div class="info">
          <nuxt-link to="/">
            <div>GUOHAO'S BLOG</div>
          </nuxt-link>
          <ul class="link-icon">
            <li>
              <a href="https://github.com/Guohao0509"><i class="icon octicon octicon-mark-github"></i><span>Coding in the shadow (￣^￣)</span></a>
            </li>
          </ul>
        </div>
        <ul class="menu-list">
          <nuxt-link tag="li" to="/">
            <i class="icon octicon octicon-hubot"></i>HOME
          </nuxt-link>
          <nuxt-link tag="li" to="/blog/tag">
            <i class="icon octicon octicon-tag"></i>TAGS
          </nuxt-link>
          <nuxt-link tag="li" to="/blog">
            <i class="icon octicon octicon-repo"></i>ARTICLES
          </nuxt-link>
        </ul>
      </div>
    </div>
    <div class="content container">
      <nuxt-child/>
    </div>
    <div class="container">
      <div class="footer">
        © 2016 - 2018 Powered by <a href="https://github.com/Guohao0509">Guohao</a> Style - <a href="https://primer.github.io/archive/">Primer</a>
        <div class="site-links">
          Site Links
          <ul>
            <li>
              <a href="https://www.baidu.com">www.baidu.com</a>
            </li>
            <li>
              <a href="https://www.alibaba.com">www.alibaba.com</a>
            </li>
            <li>
              <a href="http://www.qq.com">www.qq.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  layout: 'blog',
}
</script>

<style scoped lang="scss">
  .header {
    height: 300px;
    background: url('http://pajtmuff9.bkt.clouddn.com/header.jpg');
    background-size: 100%;
    margin-bottom: 40px;
    .container {
      a {
        color: #e7e7e7;
      }
      padding: 50px;
      color: #e7e7e7;
      text-align: center;
      .info {
        display: inline-block;
        font-size: 30px;
        .link-icon li {
          float: left;
          margin-right: 20px;
          font-size: 25px;
          a {
            color: #e7e7e7;
            span {
              font-size: 13px;
              margin-left: 10px;
              color: #e7e7e7
            }
          }
        }
      }
      .profile {
        margin-right: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .menu-list {
        width: 570px;
        height: auto;
        margin: 20px auto 20px;
        list-style: none;
        li {
          cursor: pointer;
          box-sizing: border-box;
          border: 1px solid #e7e7e7;
          margin: 20px;
          font-size: 18px;
          width: 150px;
          float: left;
          height: 50px;
          border-radius: 3px;
          line-height: 50px;
          &:hover {
            background-color: rgba(255, 255, 255, 0.8);
            color: #000000;
          }
          .icon {
            font-size: 18px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .footer {
    text-align: center;
    margin: 0;
    border-top: 1px solid #dddddd;
    .site-links {
      margin-top: 20px;
    }
  }
</style>

