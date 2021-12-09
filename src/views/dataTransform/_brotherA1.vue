<template>
  <div>
	<label>子组件A数据: </label>
	<input v-model="childValue" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'BrotherA1',
  data () {
    return {
      childValue: '',
    }
  },
  watch: {
    childValue (newV, oldV) {
      this.$emit('changeDate', newV)
    },
  },
}
</script>
