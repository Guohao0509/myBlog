<template>
  <div>
    <div class="title">
      标签分类
    </div>
    <ul class="tag-list">
      <nuxt-link tag="li" :to="{ name: 'blog-articleTag-tagId', params: { tagId: item.tagId } }" v-for="item in tags.list" :key="item.tagId">
      <my-tag :type="item.styles">{{ item.tagName }}</my-tag>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import http from '~/plugins/http.js';
import MyTag from '~/components/Tag.vue';

export default {
  asyncData ({ params }, callback) {
    return http({
      type: 'get',
      url: 'api/tag/all',
      success: (data) => {
        callback(null, {tags: data});
      },
      error: (err) => {
        console.log(err);
      }
    });
  },
  components: {
    MyTag
  }
}
</script>

<style lang="scss" scoped>
  .tag-list {
    margin-bottom: 30px;
    li {
      padding: 10px;
      display: inline-block;
    }
    .tag {
      font-size: 16px;
      cursor: pointer;
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
</style>

