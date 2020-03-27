<template>
  <div>
  	<h2>数据传输</h2>
  	<div class="item">
  		<h4>父组件单向传递给子组件</h4>
  		<div class="far">
  			<label>父组件数据: </label>
  			<input v-model="toChildData" type="text"/>
  		</div>
  		<ToChild class="child" :toChildData="toChildData"/>
  		<p class="extra">
        <a href="javascript:;" v-if="!isToChildCode" @click="() => isToChildCode = true">show code</a>
  			<a href="javascript:;" v-else @click="() => isToChildCode = false">hide code</a>
  		</p>
      <ToChildCode v-show="isToChildCode"/>
  	</div>
  	<div class="item">
  		<h4>子组件单向传递给父组件</h4>
  		<div class="far">
  			<label>父组件数据: </label>
  			<input v-model="toFatherData" type="text"/>
  		</div>
  		<ToFather class="child" @onToFather="onToFather"/>
      <p class="extra">
        <a href="javascript:;" v-if="!isToFatherCode" @click="() => isToFatherCode = true">show code</a>
        <a href="javascript:;" v-else @click="() => isToFatherCode = false">hide code</a>
      </p>
      <ToFatherCode v-show="isToFatherCode"/>
  	</div>
  	<div class="item">
  		<h4>父子组件双向数据传输，使用v-model实现，适用于只有一个参数需要双向绑定时，</h4>
  		<div class="far">
  			<label>父组件数据: </label>
  			<input v-model="singleData" type="text"/>
  		</div>
  		<Bidirectional1 class="child" v-model="singleData"/>
      <p class="extra">
        <a href="javascript:;" v-if="!isBidirectional1Code" @click="() => isBidirectional1Code = true">show code</a>
        <a href="javascript:;" v-else @click="() => isBidirectional1Code = false">hide code</a>
      </p>
      <Bidirectional1Code v-show="isBidirectional1Code"/>
  	</div>
    <div class="item">
      <h4>父子组件双向数据传输，使用.sync 修饰符实现，</h4>
      <p>1. 注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用</p>
      <p>
        2. 也可以将这个 .sync 修饰符和 v-bind 配合使用:
        <span class="code">{{`&lt;text-document v-bind.sync="doc"&gt;&lt;/text-document&gt;`}}</span>
        这样会把 doc 对象中的每一个属性都作为一个独立的 prop 传进去
      </p>
      <div class="far">
        <label>单参数父组件数据: </label>
        <input v-model="multipleData" type="text"/>
      </div>
      <Bidirectional2 class="child" :multipleData.sync="multipleData"/>
      <p class="extra">
        <a href="javascript:;" v-if="!isBidirectional2Code" @click="() => isBidirectional2Code = true">show code</a>
        <a href="javascript:;" v-else @click="() => isBidirectional2Code = false">hide code</a>
      </p>
      <Bidirectional2Code v-show="isBidirectional2Code"/>
      <!-- end -->
      <div class="far" style="margin-top: 10px;">
        <label>多参数父组件数据: </label>
        <input v-model="multipleDataObj.dataOne" type="text"/>
        <input v-model="multipleDataObj.dataTwo"  style="margin-left: 10px" type="text"/>
      </div>
      <Bidirectional3 class="child" v-bind.sync="multipleDataObj"/>
      <p class="extra">
        <a href="javascript:;" v-if="!isBidirectional3Code" @click="() => isBidirectional3Code = true">show code</a>
        <a href="javascript:;" v-else @click="() => isBidirectional3Code = false">hide code</a>
      </p>
      <Bidirectional3Code v-show="isBidirectional3Code"/>
    </div>
    <div class="item">
      <h4>父子组件双向数据传输，通过$on, $emit实现</h4>
      <div class="far">
        <label>父组件数据: </label>
        <input v-model="multipleData3" type="text"/>
      </div>
      <Bidirectional4 class="child" :multipleData="multipleData3" @changeDate="changeMultipleData"/>
      <p class="extra">
        <a href="javascript:;" v-if="!isBidirectional4Code" @click="() => isBidirectional4Code = true">show code</a>
        <a href="javascript:;" v-else @click="() => isBidirectional4Code = false">hide code</a>
      </p>
      <Bidirectional4Code v-show="isBidirectional4Code"/>
    </div>
  </div>
</template>

<script>
import ToChild from './_toChild.vue'
import ToFather from './_toFather.vue'
import Bidirectional1 from './_bidirectional1.vue'
import Bidirectional2 from './_bidirectional2.vue'
import Bidirectional3 from './_bidirectional3.vue'
import Bidirectional4 from './_bidirectional4.vue'
import ToChildCode from '../code/toChildCode.vue'
import ToFatherCode from '../code/toFatherCode.vue'
import Bidirectional1Code from '../code/bidirectional1.vue'
import Bidirectional2Code from '../code/bidirectional2.vue'
import Bidirectional3Code from '../code/bidirectional3.vue'
import Bidirectional4Code from '../code/bidirectional4.vue'
/* eslint-disable */
export default {
  name: 'DataTransform',
  components: {
  	ToChild,
    ToChildCode,
  	ToFather,
    ToFatherCode,
  	Bidirectional1,
    Bidirectional1Code,
    Bidirectional2,
    Bidirectional2Code,
    Bidirectional3,
    Bidirectional3Code,
    Bidirectional4,
    Bidirectional4Code,
  },
  data () {
  	return {
  		toChildData: '',
  		toFatherData: '',
  		singleData: '',
      multipleData: '',
      multipleDataObj: {
        dataOne: '',
        dataTwo: '',
      },
      multipleData3: '',
      isToChildCode: false,
      isToFatherCode: false,
      isBidirectional1Code: false,
      isBidirectional2Code: false,
      isBidirectional3Code: false,
      isBidirectional4Code: false,
  	}
  },
  mounted () {
  },
  methods: {
  	onToFather (data) {
  		this.toFatherData = data
  	},
    changeMultipleData (value) {
      this.multipleData3 = value
    },
  },
}
</script>
<style lang="less" scoped>
	@import "../../../node_modules/highlight.js/styles/monokai-sublime.css";
	.item {
		padding: 10px;
		border-radius: 5px;
		background: #F8F8F8;
		color: #333333;
		margin-bottom: 10px;
		position: relative;
		.far {
			margin-bottom: 6px;
      margin-left: 10px;
			label {
				margin-right: 10px;
			}
		}
		.child {
			margin-bottom: 6px;
      margin-left: 10px;
			/deep/ label {
				margin-right: 10px;
			}
		}
		.extra {
			text-align: right;
		}
    .code {
      display: inline-block;
      padding: 5px 10px;
      background-color: #EFEFEF;
      color: #3A74B2;
      border-radius: 10px;
      font-size: 12px;
    }
	}
</style>
