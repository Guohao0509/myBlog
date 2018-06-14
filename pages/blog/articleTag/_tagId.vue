<template>
  <div>
    <div class="title">
      标签相关文章
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
    </div>
  </div>
</template>

<script>
import http from '~/plugins/http.js';
import MyTag from '~/components/Tag.vue';

export default {
  asyncData ({ params }, callback) {
    http({
      type: 'post',
      url: 'api/article/listByTag',
      params: {
        tagId: params.tagId
      },
      success: (data) => {
        callback(null, {articles: data.list});
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
      articles: []
    }
  },
  mounted() {
  //   console.log(this.$route.params.tagId)
  //   this.$http({
  //     type: 'post',
  //     url: 'api/article/listByTag',
  //     params: {
  //       tagId: this.$route.params.tagId
  //     },
  //     success: (data) => {
  //       console.log(data)
  //       this.articles = data.list;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
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
</style>

