<template>
  <div>
    <div class="recommended">
      <div class="title">
        推荐文章
      </div>
      <div>
        <ul>
          <nuxt-link tag="li" :to="{ name: 'blog-article-article', params: { article: item.articleId } }" v-for="item in recommendedArticles" :key="item.articleId">
            <a href="">
              <span>{{ item.title }}</span>
              <div class="recommended-info">
                <span>创建时间：{{ item.createTime | timeFormat }}</span>
                <span class="hot"><i class="octicon octicon-flame"></i> {{ item.visits}}</span>
              </div>
            </a>
          </nuxt-link>
        </ul>
      </div>
    </div>
    <div class="title">
      文章列表
      <div class="search">
        <div class="">
          <input class="form-control input-inline-block" v-model="keyword" placeholder="search">
          <button class="btn" @click="search()">
            <span class="octicon octicon-search"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="article-list">
      <ul>
        <li v-for="item in articles" :key="item.articleId">
          <div class="article-title">
            <nuxt-link tag="span" class="item-title" :to="{ name: 'blog-article-article', params: { article: item.articleId } }">
              {{ item.title }}
              <my-tag v-for="item in item.tags" :key="item.tagId" :type="item.styles">{{ item.tagName }}</my-tag>
            </nuxt-link>
          </div>
          <div class="article-intro">
            <span>创建时间：{{ item.createTime | timeFormat }}</span>
            <span>更新时间：{{ item.updateTime | timeFormat }}</span>
            <span class="hot"><i class="octicon octicon-flame"></i> {{ item.visits}}</span>
          </div>
          <div class="article-info">{{ item.info}}</div>
        </li>
      </ul>
      <!-- <div class="ckeck-more">
        <a v-if="articles.length >= 10" @click="checkMore()">查看更多文章</a>
        <span v-else>没有更多数据了</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import http from '~/plugins/http.js';
import MyTag from '~/components/Tag.vue';

export default {
  asyncData ({ params }, callback) {
    http({
      type: 'get',
      url: 'api/article/index',
      success: (index) => {
        http({
          type: 'get',
          url: 'api/article/recommended',
          success: (recommended) => {
            callback(null, {recommendedArticles: recommended.list, articles: index.list});
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
    
  },
  components: {
    MyTag
  },
  data() {
    return {
      keyword: '',
      articles: []
    }
  },
  methods: {
    search() {
      this.$http({
        type: 'post',
        url: 'api/article/listByKeyword',
        params: {keyword: this.keyword},
        success: (data) => {
          this.articles = data.list;
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    checkMore() {

    }
  }
}
</script>

<style lang="scss" scoped>
  span.hot {
    float: right;
    margin-right: 0;
    font-size: 16px;
    i {
      color: #e43;
    }
  }
  .recommended {
    margin-bottom: 30px;
    .title {
      margin-bottom: 20px;
    }
    ul {
      list-style: circle;
      padding: 10px 30px;
      li {
        padding: 8px 0;
        font-size: 15px;
        span:not(:last-child) {
          margin-right: 30px;
        }
        .recommended-info {
          float: right;
          font-size: 13px;
          color: rgb(145, 145, 145);
        }
      }
    }
  }
  .search {
    float: right;
    width: 400px;
    margin-top: -2px;
    .input-inline-block {
      width: 90%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .btn {
      width: 10%;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .title {
    margin-bottom: 50px;
    border-left: 3px solid #e43;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 25px;
    padding: 10px 13px 10px 20px;
    font-weight: bold;
    background-color: #f7f7f7;
  }
  .article-list {
    li {
      margin-bottom: 50px;
      padding-bottom: 50px;
      border-bottom: 3px dashed #eeeeee;
    }
    li:last-child {
      padding-bottom: 50px;
      margin-bottom: 0px;
      border-bottom: none;
    }
    line-height: 1.8em;
    .article-title {
      .item-title {
        cursor: pointer;
      }
      font-size: 23px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .article-tags {
      margin-bottom: 10px;
    }
    .article-intro {
      font-size: 14px;
      margin-bottom: 10px;
      span {
        margin-right: 50px;
        color: rgb(138, 138, 138);
      }
      
    }
  }
  .ckeck-more {
    text-align: center;
    margin-bottom: 40px;
  }
</style>

