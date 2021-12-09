<template>
  <div>
	<label>子组件B数据: </label>
	<input v-model="childValue" type="text"/>
  </div>
</template>

<script>
import { Bus } from '../../common/bus'
export default {
  name: 'BrotherB2',
  data () {
    return {
      childValue: ''
    }
  },
  created () {
    Bus.$on('changeBrotherData2', init)
  },
  beforeDestroy () {
    Bus.$off('changeBrotherData2', init)
  },
  methods: {
    init (value) {
      this.childValue = value
    }
  },
}
</script>
