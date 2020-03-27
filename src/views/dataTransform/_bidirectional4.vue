<template>
  <div>
	<label>子组件数据: </label>
	<input v-model="childValue" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'Bidirectional4',
  props: {
  	multipleData: String,
  },
  computed: {
    childValue: {
      get () {
        return this.multipleData
      },
      set (value) {
        this.$emit('changeDate', value)
      },
    },
  },
}
</script>
