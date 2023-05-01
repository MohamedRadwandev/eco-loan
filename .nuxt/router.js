import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea83c774 = () => interopDefault(import('..\\pages\\fail.vue' /* webpackChunkName: "pages/fail" */))
const _b57407b6 = () => interopDefault(import('..\\pages\\Job.vue' /* webpackChunkName: "pages/Job" */))
const _5483921e = () => interopDefault(import('..\\pages\\Plan.vue' /* webpackChunkName: "pages/Plan" */))
const _7e55bd8b = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _ce122334 = () => interopDefault(import('..\\pages\\quote\\_id.vue' /* webpackChunkName: "pages/quote/_id" */))
const _8079fa4c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fail",
    component: _ea83c774,
    name: "fail"
  }, {
    path: "/Job",
    component: _b57407b6,
    name: "Job"
  }, {
    path: "/Plan",
    component: _5483921e,
    name: "Plan"
  }, {
    path: "/success",
    component: _7e55bd8b,
    name: "success"
  }, {
    path: "/quote/:id?",
    component: _ce122334,
    name: "quote-id"
  }, {
    path: "/",
    component: _8079fa4c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
