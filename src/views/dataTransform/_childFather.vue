<template>
  <div>
    <h5>父组件{{grandchildData()}}</h5>
    <div style="margin-left: 10px">
      <Child/>
    </div>
    
  </div>
</template>

<script>
import Child from './_child'
export default {
  components: {
    Child,
  },
  inject: ['grandchildData'],
}
</script>