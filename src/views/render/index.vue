<template>
  <div>
    <Test :level="1">aaaaaa</Test>
  </div>
</template>
<script>
import Test from './test'
export default {
  name: 'Render',
  components: {
    Test,
  }
}
</script>