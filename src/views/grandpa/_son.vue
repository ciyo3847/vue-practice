<template>
  <div class="box-son">
    <h3>Son 组件</h3>
    <GrandSon class="flex-1" />
  </div>
</template>
<script>
import GrandSon from './_grandson'
export default {
  name: 'Son',
  components: {
    GrandSon,
  },
}
</script>
<style lang="less" scoped>
  .box-son {
    margin-top: 10px;
    width: 100%;
    padding: 20px;
    background-color: #D4C36E;
    display: flex;
    flex-direction: column;
  }
</style>