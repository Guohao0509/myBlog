import Axios from 'axios';
import config from '~/common.config.js';
import Vue from 'vue';
import qs from 'qs';

var options = {
  baseURL: config.API_HOST,
  timeout: config.TIME_OUT || 5000,
  headers: config.HEADERS || {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
  validateStatus: function (status) {
    return status == 200;
  }
}
var axios = Axios.create(options);

var http = function (config) {
  switch (config.type) {
    case 'get' :
      get(config.url, config.params, config.success, config.error);
      break;
    case 'post' :
      post(config.url, config.params, config.success, config.error);
      break;
  }
}

Vue.prototype.$http = http;
export default http;

function get(url, params, success, error) {
  axios.get(url, {
      params: params
    })
    .then(function (response) {
      if (response.data.code == 0) {
        success && success(response.data.data);
      } else {
        error && error(response.data.data);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function post(url, params, success, error) {
  axios.post(url, qs.stringify(params))
    .then(function (response) {
      if (response.data.code == 0) {
        success && success(response.data.data);
      } else {
        error && error(response.data.data);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}