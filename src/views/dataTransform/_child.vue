<template>
  <div>
    <label>孙组件数据: </label>
    <span>{{grandchildData()}}</span>
  </div>
</template>

<script>
export default {
  name: 'BrotherA1',
  inject: ['grandchildData'],
}
</script>
