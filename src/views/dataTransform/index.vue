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
  		<!-- <p class="extra">
        <a href="javascript:;" v-if="!isToChildCode" @click="() => isToChildCode = true">show code</a>
  			<a href="javascript:;" v-else @click="() => isToChildCode = false">hide code</a>
  		</p>
      <ToChildCode v-show="isToChildCode"/> -->
  	</div>
  	<div class="item">
  		<h4>子组件单向传递给父组件</h4>
  		<div class="far">
  			<label>父组件数据: </label>
  			<input v-model="toFatherData" type="text"/>
  		</div>
  		<ToFather class="child" @onToFather="onToFather"/>
  	</div>
  	<div class="item">
  		<h4>父子组件双向数据传输，使用v-model实现，适用于只有一个参数需要双向绑定时，</h4>
  		<div class="far">
  			<label>父组件数据: </label>
  			<input v-model="singleData" type="text"/>
  		</div>
  		<Bidirectional1 class="child" v-model="singleData"/>
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
      <!-- end -->
      <div class="far" style="margin-top: 10px;">
        <label>多参数父组件数据: </label>
        <input v-model="multipleDataObj.dataOne" type="text"/>
        <input v-model="multipleDataObj.dataTwo"  style="margin-left: 10px" type="text"/>
      </div>
      <Bidirectional3 class="child" v-bind.sync="multipleDataObj"/>
    </div>
    <div class="item">
      <h4>父子组件双向数据传输，通过$on, $emit实现</h4>
      <div class="far">
        <label>父组件数据: </label>
        <input v-model="multipleData3" type="text"/>
      </div>
      <Bidirectional4 class="child" :multipleData="multipleData3" @changeDate="changeMultipleData"/>
    </div>
    <div class="item">
      <h4>兄弟组件数据传递，使用父组件做中转</h4>
      <div class="far">
        <label>父组件数据: </label>
        <span>{{ brotherData1 }}</span>
      </div>
      <BrotherA1 class="child" @changeDate="changeBrotherData"></BrotherA1>
      <BrotherB1 class="child" :brotherData1="brotherData1"></BrotherB1>
    </div>
    <div class="item">
      <h4>兄弟组件数据传递，Bus中央事件总线</h4>
      <p>使用bus需要注意两点: </p>
      <ol>
        <li>$on应该在 created钩子内使用，如果在mounted使用，它可能接受不到其他组件来自created钩子发出的事件</li>
        <li>使用on后，在beforeDestroy钩子里应该使用off解除。因为组件销毁后，就没必要把监听的句柄储存在bus里。</li>
      </ol>
      <div class="far">
        <label>父组件数据: </label>
      </div>
      <BrotherA2 class="child"></BrotherA2>
      <BrotherB2 class="child"></BrotherB2>
    </div>
    <div class="item">
      <h4>祖孙组件数据传递</h4>
      <div class="far">
        <label>祖组件数据:</label>
        <input v-model="grandchildData" type="text"/>
      </div>
      <ChildFather class="child"></ChildFather>
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
import BrotherA1 from './_brotherA1.vue'
import BrotherB1 from './_brotherB1.vue'
import BrotherA2 from './_brotherA2.vue'
import BrotherB2 from './_brotherB2.vue'
import ChildFather from './_childFather.vue'
/* eslint-disable */
export default {
  name: 'DataTransform',
  components: {
  	ToChild,
  	ToFather,
  	Bidirectional1,
    Bidirectional2,
    Bidirectional3,
    Bidirectional4,
    BrotherA1,
    BrotherB1,
    BrotherA2,
    BrotherB2,
    ChildFather,
  },
  provide () {
    return {
      grandchildData: () => this.grandchildData,
    }
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
      brotherData1: '',
      brotherData2: '',
      grandchildData: '',
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
    changeBrotherData (value) {
      this.brotherData1 = value
    },
  },
}
</script>
<style lang="less" scoped>
	@import "../../../node_modules/highlight.js/styles/monokai-sublime.css";
  ol {
    margin-left: 20px;
    list-style-position: inside;
    margin-bottom: 10px;
  }
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
