<template>
  <div>
  <label>子组件数据: </label>
  <input v-model="toFatherData" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'ToFather',
  components: {
  },
  data () {
    return {
      toFatherData: '',
    }
  },
  watch: {
    toFatherData (newValue, oldValue) {
      this.$emit('onToFather', newValue)
    },
  },
};
</script>
