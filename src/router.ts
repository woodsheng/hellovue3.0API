import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import VueCompositionApi from '@vue/composition-api';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import zhCN from 'vee-validate/dist/locale/zh_CN';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.use(iView)
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'zhCN',
});
Vue.use(VeeValidate, {
    i18n,
    i18nRootKey: 'validation',
    dictionary: {
        zhCN,
    },
});
Vue.use(VueCompositionApi);
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
      {
          path: '/exdatabind',
          name: 'exdatabind',
          component: () => import('@/components/chapter1/Exdatabind.vue'),
      },
      {
          path: '/exindirective',
          name: 'exindirective',
          component: () => import('@/components/chapter1/Exindirective.vue'),
      },
      {
          path: '/exfilter',
          name: 'exfilter',
          component: () => import('@/components/chapter1/Exfilter.vue'),
      },
      {
          path: '/excompute',
          name: 'excompute',
          component: () => import('@/components/chapter1/Excompute.vue'),
      },
      {
          path: '/exmethod',
          name: 'exmethod',
          component: () => import('@/components/chapter1/Exmethod.vue'),
      },
      {
          path: '/exclassstyle',
          name: 'exclassstyle',
          component: () => import('@/components/chapter1/Exclassstyle.vue'),
      },
      {
          path: '/exusecomdevreg',
          name: 'exusecomdevreg',
          component: () => import('@/components/chapter2/Exusecomdevreg.vue'),
      },
      {
          path: '/exusecomprops',
          name: 'exusecomprops',
          component: () => import('@/components/chapter2/Exusecomprops.vue'),
      },
      {
          path: '/exusecomstate',
          name: 'exusecomstate',
          component: () => import('@/components/chapter2/Exusecomstate.vue'),
      },
      {
          path: '/exusecomevent',
          name: 'exusecomevent',
          component: () => import('@/components/chapter2/Exusecomevent.vue'),
      },
      {
          path: '/exusecomslot',
          name: 'exusecomslot',
          component: () => import('@/components/chapter2/Exusecomslot.vue'),
      },
      {
          path: '/exusecomref',
          name: 'exusecomref',
          component: () => import('@/components/chapter2/Exusecomref.vue'),
      },
      {
          path: '/exlifecycle',
          name: 'exlifecycle',
          component: () => import('@/components/chapter2/Exlifecycle.vue'),
      },
      {
          path: '/exusecomfun',
          name: 'exusecomfun',
          component: () => import('@/components/chapter2/Exusecomfun.vue'),
      },
      {
          path: '/exform',
          name: 'exform',
          component: () => import('@/components/chapter3/Exform.vue'),
      },
      {
          path: '/exuseveevalidate',
          name: 'exuseveevalidate',
          component: () => import('@/components/chapter3/Exuseveevalidate.vue'),
      },
      {
          path: '/exiview',
          name: 'exiview',
          component: () => import('@/components/chapter3/Exiview.vue'),
      },
      {
          path: '/exelementui',
          name: 'exelementui',
          component: () => import('@/components/chapter3/Exelementui.vue'),
      },
  ],
});
