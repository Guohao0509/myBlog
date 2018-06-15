import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1e317a8c = () => import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */).then(m => m.default || m)
const _0dd325ca = () => import('..\\pages\\blog.vue' /* webpackChunkName: "pages_blog" */).then(m => m.default || m)
const _576e1110 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _1b37b0cd = () => import('..\\pages\\blog\\user\\index.vue' /* webpackChunkName: "pages_blog_user_index" */).then(m => m.default || m)
const _08f65480 = () => import('..\\pages\\blog\\tag.vue' /* webpackChunkName: "pages_blog_tag" */).then(m => m.default || m)
const _79108ae4 = () => import('..\\pages\\blog\\articleTag\\_tagId.vue' /* webpackChunkName: "pages_blog_articleTag__tagId" */).then(m => m.default || m)
const _a454565a = () => import('..\\pages\\blog\\article\\_article.vue' /* webpackChunkName: "pages_blog_article__article" */).then(m => m.default || m)
const _ae97b5c0 = () => import('..\\pages\\blog\\user\\_userId.vue' /* webpackChunkName: "pages_blog_user__userId" */).then(m => m.default || m)
const _44d6cfda = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _1e317a8c,
			name: "test"
		},
		{
			path: "/blog",
			component: _0dd325ca,
			children: [
				{
					path: "",
					component: _576e1110,
					name: "blog"
				},
				{
					path: "user",
					component: _1b37b0cd,
					name: "blog-user"
				},
				{
					path: "tag",
					component: _08f65480,
					name: "blog-tag"
				},
				{
					path: "articleTag/:tagId",
					component: _79108ae4,
					name: "blog-articleTag-tagId"
				},
				{
					path: "article/:article",
					component: _a454565a,
					name: "blog-article-article"
				},
				{
					path: "user/:userId",
					component: _ae97b5c0,
					name: "blog-user-userId"
				}
			]
		},
		{
			path: "/",
			component: _44d6cfda,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
