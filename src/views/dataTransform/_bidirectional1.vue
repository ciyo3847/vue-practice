<template>
  <div>
	<label>子组件数据: </label>
	<input v-model="childValue" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'Bidirectional1',
  components: {
  },
  model: {
    prop: 'singleData',
    event: 'change',
  },
  props: {
  	singleData: String,
  },
  computed: {
    childValue: {
      get () {
        return this.singleData
      },
      set (value) {
        this.$emit('change', value)
      },
    },
  },
}
</script>
