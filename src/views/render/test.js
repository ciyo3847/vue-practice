/*
 * @Author: YZY
 * @Date: 2020-09-02 10:18:13
 * @LastEditTime: 2020-09-02 17:37:20
 * @FilePath: /vue-practice/src/views/render/test.js
 * @Description: 
 */
// export default {
//   install: function (Vue) {
//     Vue.component('Test', {
//       // name: 'Test',
//       render: function (createElement) {
//         return createElement(
//           'h' + this.level,   // 标签名称
//           this.$slots.default // 子节点数组
//         )
//       },
//       props: {
//         level: {
//           type: Number,
//           required: true
//         }
//       }
//     })
//   },
// }
const test = {
  render: function (createElement) {
      return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子节点数组
      )
    },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}

export default test