import Vue from 'vue';

Vue.filter('timeFormat', function (value) {
  if (!value) return ''
  return new Date(value).toLocaleString().split('/').join('-');
})