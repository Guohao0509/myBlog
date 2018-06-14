import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0693a1da = () => import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */).then(m => m.default || m)
const _19a21223 = () => import('..\\pages\\blog.vue' /* webpackChunkName: "pages_blog" */).then(m => m.default || m)
const _376124ff = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _2a235d14 = () => import('..\\pages\\blog\\user\\index.vue' /* webpackChunkName: "pages_blog_user_index" */).then(m => m.default || m)
const _7008b907 = () => import('..\\pages\\blog\\tag.vue' /* webpackChunkName: "pages_blog_tag" */).then(m => m.default || m)
const _15425e86 = () => import('..\\pages\\blog\\articleTag\\_tagId.vue' /* webpackChunkName: "pages_blog_articleTag__tagId" */).then(m => m.default || m)
const _07aa204c = () => import('..\\pages\\blog\\article\\_article.vue' /* webpackChunkName: "pages_blog_article__article" */).then(m => m.default || m)
const _a93448b2 = () => import('..\\pages\\blog\\user\\_userId.vue' /* webpackChunkName: "pages_blog_user__userId" */).then(m => m.default || m)
const _9a3522be = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/test",
			component: _0693a1da,
			name: "test"
		},
		{
			path: "/blog",
			component: _19a21223,
			children: [
				{
					path: "",
					component: _376124ff,
					name: "blog"
				},
				{
					path: "user",
					component: _2a235d14,
					name: "blog-user"
				},
				{
					path: "tag",
					component: _7008b907,
					name: "blog-tag"
				},
				{
					path: "articleTag/:tagId",
					component: _15425e86,
					name: "blog-articleTag-tagId"
				},
				{
					path: "article/:article",
					component: _07aa204c,
					name: "blog-article-article"
				},
				{
					path: "user/:userId",
					component: _a93448b2,
					name: "blog-user-userId"
				}
			]
		},
		{
			path: "/",
			component: _9a3522be,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
