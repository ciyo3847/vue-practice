<template>
  <div>
  	<label>子组件数据: </label>
  	<input v-model="childDate" type="text"/>
  </div>
</template>
<script>
export default {
  name: 'ToChild',
  components: {
  },
  props: {
  	toChildData: {
  		type: String,
  		default: '',
  	}
  },
  computed: {
    childDate: {
      get () {
        return this.toChildData
      },
      set (value) {

      },
    },
  },
  data () {
  	return {
  		
  	}
  },
}
</script>
