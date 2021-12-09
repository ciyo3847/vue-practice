<template>
  <div>
  <label>多参数子组件数据: </label>
  <input v-model="childValueOne" type="text"/>
  <input v-model="childValueTwo" style="margin-left: 10px" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'Bidirectional3',
  props: {
    dataOne: String,
    dataTwo: String,
  },
  computed: {
    childValueOne: {
      get () {
        return this.dataOne
      },
      set (value) {
        this.$emit('update:dataOne', value)
      },
    },
    childValueTwo: {
      get () {
        return this.dataTwo
      },
      set (value) {
        this.$emit('update:dataTwo', value)
      },
    },
  },
}
</script>
