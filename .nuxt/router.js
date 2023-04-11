import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b57407b6 = () => interopDefault(import('..\\pages\\Job.vue' /* webpackChunkName: "pages/Job" */))
const _5483921e = () => interopDefault(import('..\\pages\\Plan.vue' /* webpackChunkName: "pages/Plan" */))
const _ce122334 = () => interopDefault(import('..\\pages\\quote\\_id.vue' /* webpackChunkName: "pages/quote/_id" */))
const _f4576b0a = () => interopDefault(import('..\\pages\\_index.vue' /* webpackChunkName: "pages/_index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Job",
    component: _b57407b6,
    name: "Job"
  }, {
    path: "/Plan",
    component: _5483921e,
    name: "Plan"
  }, {
    path: "/quote/:id?",
    component: _ce122334,
    name: "quote-id"
  }, {
    path: "/:index",
    component: _f4576b0a,
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
