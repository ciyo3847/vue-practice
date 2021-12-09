<template>
  <div>
	<label>子组件B数据: </label>
	<input v-model="childValue" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'BrotherB1',
  props: {
    brotherData1: String,
  },
  computed: {
    childValue: {
      get () {
        return this.brotherData1
      },
    },
  },
}
</script>
