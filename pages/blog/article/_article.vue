<template>
  <div class="article">
    <div class="title">
      <h1>{{ article.title }}</h1>
      <div class="base-info">
        <!-- <i class="octicon octicon-tag"></i> -->
        <my-tag v-for="item in article.tags" :key="item.tagId" :type="item.styles">{{ item.tagName }}</my-tag>
        <div class="clearfix article-label" @click="watch(article.articleId)">
          <a class="btn btn-sm btn-with-count">
            <span class="octicon octicon-eye"></span>
            Watch
          </a>
          <a class="social-count">{{ article.visits }}</a>
        </div>

        <!-- <div class="clearfix article-label" @click="star(article.articleId)">
          <a class="btn btn-sm btn-with-count">
            <span class="octicon octicon-eye"></span>
            star
          </a>
          <a class="social-count">{{ article.stars }}</a>
        </div>

        <div class="clearfix article-label" @click="keep(article.articleId)">
          <a class="btn btn-sm btn-with-count">
            <span class="octicon octicon-eye"></span>
            keep
          </a>
          <a class="social-count">{{ article.keeps }}</a>
        </div> -->
      </div>
      <div class="other-info">
        <span>作者：{{ article.author }}</span>
        <span>创建时间：{{ article.createTime | timeFormat }}</span>
        <span>最后更新时间：{{ article.updateTime | timeFormat }}</span> 
      </div>
      
    </div>
    <div class="info">
      {{ article.info }}
    </div>
    <div class="content">
      <div v-html="article.text" v-highlight></div>
    </div>
    <div class="foot">
      坚持原创技术分享，您的支持将鼓励我继续创作！
      <div>
        <button class="btn btn-primary btn-sm tip" @click="showMe = !showMe">赏 ($_$)</button>
        <div v-if="showMe">
          <img src="~/assets/image/me.jpg" class="me">
        </div>
      </div>
    </div>
    <!-- <div class="comment">
      <div class="comment-title">
      </div>
      <ul class="comment-list">
        <li>
          <div class="comment-profile">
            <img src="~/assets/image/Tony.jpg"  alt="">
          </div>
          <div class="comment-text">
            <div style="position: relative;">
              <textarea rows="5" placeholder="Do not stick ads and scripts in there, I'm watching you." v-model="userComment"></textarea>
              <span v-if="replayUserId" style="position: absolute;bottom: 10px;left: 10px; font-size: 14px;font-weight: bold;">回复 {{ replayUser }}</span>
              <div class="comment-func-btn" @click="addComment(article.articleId)">
                <button class="btn btn-sm">
                  <span style="margin-left: 0;"><i class="octicon octicon-versions"></i>Go Go</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li v-for="item in comments" :key="item.commentId">
          <div class="comment-profile">
            <img src="~/assets/image/Tony.jpg"  alt="">
          </div>
          <div class="comment-text">
            <div>
              <div class="comment-info">
                <span>{{ item.nickname }}</span>
                <span v-if="item.toUserId">回复</span>
                <span v-if="item.toUserId">{{ item.toNickname || '钢铁侠' }}</span>
                <span class="comment-time">2018年10月15号 12:34:90</span>
              </div>
              <p>{{ item.comment }}</p>
              <div class="comment-func-btn">
                <span @click="showDialog(item.toUserId, article.articleId)" v-if="item.toUserId"><i class="octicon octicon-comment-discussion"></i>Dialog</span>
                <span @click="reply(item.userId, item.nickname)"><i class="octicon octicon-megaphone"></i>Reply</span>
                <span @click="wow(item.commentId)"><i class="octicon octicon-thumbsup"></i> Wow ({{ item.stars }})</span>
                <span @click="poo(item.commentId)"><i class="octicon octicon-thumbsdown"></i> Poo ({{ item.tipOffs }})</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="more-comment">
        <a>查看更多评论</a>
        <span>没有评论了</span>
      </div>
      <my-dialog ref="dialog" title="查看对话">
        <ul class="dialog-list">
          <li v-for="item in dialog" :key="item.commentId">
            <div class="comment-info">
              <span>{{ item.nickname }}</span>
              <span v-if="item.toUserId">回复</span>
              <span v-if="item.toUserId">{{ item.toNickname || '钢铁侠' }}</span>
              <span class="comment-time">2018年10月15号 12:34:90</span>
            </div>
            <div class="dialog-body">
              {{ item.comment }}
            </div>
          </li>
        </ul>
      </my-dialog>
    </div> -->
  </div>
</template>

<script>
import http from '~/plugins/http.js';
import MyTag from '~/components/Tag.vue';
import marked from 'marked';
import MyDialog from '~/components/Dialog.vue';

export default {
  scrollToTop: true,
  asyncData ({ params }, callback) {
    http({
      type: 'post',
      url: 'api/article/watch',
      params: {articleId: params.article},
      success: (data) => {
      },
      error: (err) => {
        console.log(err);
      }
    });
    return http({
      type: 'post',
      url: 'api/article/getArticleById',
      params: {articleId: params.article},
      success: (data) => {
        data.text = marked(data.text);
        callback(null, {article: data});
      },
      error: (err) => {
        console.log(err);
      }
    });
  },
  components: {
    MyTag,
    MyDialog
  },
  data() {
    return {
      showMe: false,
      comments: [],
      userComment: '',
      replayUser: '',
      replayUserId: '',
      dialog: []
    }
  },
  mounted() {
    this.$http({
      type: 'get',
      url: 'api/comment/listByArticle',
      params: {articleId: this.$route.params.article},
      success: (data) => {
        this.comments = data.list;
      },
      error: (err) => {
        console.log(err);
      }
    });
  },
  methods: {
    watch(articleId) {
      this.$http({
        type: 'post',
        url: 'api/article/watch',
        params: {articleId: articleId},
        success: (data) => {
          this.article.visits ++;
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    star(articleId) {
      this.$http({
        type: 'post',
        url: 'api/article/star',
        params: {articleId: articleId},
        success: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    keep(articleId) {
      this.$http({
        type: 'post',
        url: 'api/article/keep',
        params: {articleId: articleId},
        success: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    addComment(articleId) {
      this.$http({
        type: 'post',
        url: 'api/comment/add',
        params: {
          articleId: articleId,
          comment: this.userComment,
          userId: '8140de44-7283-4ee7-b63f-0eec61751cd4',
          toUserId: this.replayUserId
        },
        success: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    showDialog(toUserId, articleId) {
      this.$http({
        type: 'post',
        url: 'api/comment/getCommentsByChat',
        params: {
          toUserId: '64c35cee-182c-49f4-a60f-36a3a7921a93',
          articleId: articleId,
          userId: '8140de44-7283-4ee7-b63f-0eec61751cd4'
        },
        success: (data) => {
          this.dialog = data;
          this.$refs.dialog.show();
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    reply(userId, nickname) {
      this.replayUser = nickname;
      this.replayUserId = userId;
    },
    wow(commentId) {
      this.$http({
        type: 'post',
        url: 'api/comment/wow',
        params: {commentId: commentId},
        success: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    poo(commentId) {
      this.$http({
        type: 'post',
        url: 'api/comment/poo',
        params: {commentId: commentId},
        success: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/highlight/styles/github-gist.css' }
    ],
    script: [
      {src: '/highlight/highlight.pack.js'}
    ]
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 50px;
    h1 {
      text-align: center;
      margin-bottom: 25px;
    }
    .base-info {
      text-align: center;
      margin-bottom: 15px;
    }
    .other-info {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      span {
        margin: 10px;
      }
    }
  }
  .article-label {
    display: inline-block;
    margin-left: 20px;
    vertical-align: bottom;
  }
  .info {
    margin-bottom: 50px;
    text-indent: 30px;
    line-height: 1.8em;
    color: rgb(109, 109, 109);
    font-weight: 500;
    border-left: 3px solid #bbbbbb;
    padding-left: 20px;
  }
  .content {
    margin-bottom: 50px;
    font-size: 16px;
    line-height: 1.8em;
  }
  .comment {
    margin-bottom: 30px;
    .more-comment {
      text-align: center;
      cursor: pointer;
      color: #a8a8a8;
    }
    .comment-func-btn {
      span {
        cursor: pointer;
        margin-left: 20px;
        i {
          margin-right: 5px;
        }
      }
      text-align: right;
      padding: 10px 10px 5px 5px;
      font-size: 12px;
    }
    .comment-title {
      font-size: 18px;
      color: #616161;
      font-weight: bold;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 30px;
      padding-bottom: 5px;
    }
    li {
      margin-bottom: 30px;
    }
    .show-comment {
      color: rgb(128, 128, 128);
    }
    .comment-profile {
      display: inline-block;
      width: 70px;
      vertical-align: top;
      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }
    }
    .comment-text {
      width: 910px;
      display: inline-block;
      border:  1px solid #dddddd;
      border-radius: 3px;
      p {
        padding: 15px;
        font-size: 14px;
        line-height: 1.8em;
        word-wrap: break-word;
      }
      textarea {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 10px;
        resize: none;
        font-size: 13px;
        line-height: 1.8em;
      }
      .comment-info {
        height: 30px;
        line-height: 30px;
        background-color: rgb(235, 240, 243);
        span {
          margin-left: 10px;
          font-size: 14px;
        }
        span.comment-time{
          margin-right: 20px;
          font-size: 12px;
          float: right;
        }
      }
    }
  }
  .foot {
    margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
    color: rgb(128, 128, 128);
    .tip {
      margin-top: 15px;
      padding: 0 10px;
    }
    .me {
      margin-top: 20px;
      border-radius: 3px;
    }
  }
  h1 {
    margin: 20px 0 0 10px;
  }
  h2 {
    margin: 15px 0 0 10px;
  }
  h3 {
    margin: 10px 0 0 5px;
  }
  h4 {
    margin: 5px 0 0 0;
  }
  .dialog-list {
    font-size: 13px;
    .comment-time {
      float: right;
    }
    .comment-info {
      height: 30px;
      line-height: 30px;
      background-color: rgb(235, 240, 243);
      span {
        margin-left: 5px;
        font-size: 14px;
      }
      span.comment-time{
        margin-right: 20px;
        font-size: 12px;
        float: right;
      }
    }
    li {
      span {
        margin-right: 10px;
      }
    }
    .dialog-body {
      margin: 0 0 20px 0;
      border: 1px solid rgb(207, 207, 207);
      padding: 10px;
      border-radius: 3px;
      border-top: none;
    }
  }
</style>

