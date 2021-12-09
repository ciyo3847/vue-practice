<template>
  <div>
	<label>子组件A数据: </label>
	<input v-model="childValue" type="text"/>
  </div>
</template>

<script>
import { Bus } from '../../common/bus'
export default {
  name: 'BrotherA2',
  data () {
    return {
      childValue: '',
    }
  },
  watch: {
    childValue (newV, oldV) {
      Bus.$emit('changeBrotherData2', newV)
    },
  },
}
</script>
