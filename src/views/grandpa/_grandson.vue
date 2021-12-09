<template>
  <div class="box-grandSon">
    <h3>GrandSon 组件</h3>
    <p>[toGdata]: {{ grandSonData }}</p>
    <button @click="onClick()">click</button>
  </div>
</template>
<script>
export default {
  name: 'GrandSon',
  inject: ['toGdata', 'onFather'],
  computed: {
    grandSonData () {
      return this.toGdata()
    },
  },
  methods: {
    onClick () {
      this.onFather()
    },
  },
}
</script>
<style lang="less" scoped>
  .box-grandSon {
    margin-top: 10px;
    width: 100%;
    padding: 20px;
    background-color: #9E987E;
  }
</style>