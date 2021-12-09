<template>
  <div>
  <label>单参数子组件数据: </label>
  <input v-model="childValue" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'Bidirectional2',
  components: {
  },
  props: {
    multipleData: String,
  },
  computed: {
    childValue: {
      get () {
        return this.multipleData
      },
      set (value) {
        this.$emit('update:multipleData', value)
      },
    },
  },
}
</script>
