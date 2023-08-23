import HelloWorld from '../../components/HelloWorld/index.vue'
export default ({ Vue, options, router, siteData }) => {
  // 使用element-ui
  Vue.component('HelloWorld', HelloWorld)
}
