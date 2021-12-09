<template>
  <div class="box">
    <h3>Father 组件</h3>
    <p>传给孙子级组件G的参数【toGdata】：{{ toGdata }}<br></p>
    <input v-model="toGdata" type="text">
    <Son class="flex-1"/>
  </div>
</template>
<script>
import Son from './_son'
export default {
  name: 'Father',
  components: {
    Son,
  },
  provide() {
    return {
      toGdata: () => this.toGdata,
      onFather: this.onFather,
    }
  },
  data() {
    return {
      toGdata: 'aaa',
    }
  },
  methods: {
    onFather () {
      console.log('调用了祖组件的方法')
    },
  },
}
</script>
<style lang="less" scoped>
  .box {
    margin: 30px auto;
    width: 600px;
    min-height: 600px;
    padding: 20px;
    background-color: #d6e7ff;
    display: flex;
    flex-direction: column;
    input {
      padding: 4px 10px;
      font-size: 14px;
    }
  }
  .flex-1 {
    flex: 1;
  }
</style>