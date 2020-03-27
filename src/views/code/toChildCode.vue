<template>
	<div>
		<p>父组件:</p>
		<!-- code -->
<pre class='hljs'><code><span class="hljs-tag">&lt;<span class="hljs-title">div</span></span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"far"</span>&gt;</span>
  	<span class="hljs-tag">&lt;<span class="hljs-title">label</span>&gt;</span>父组件数据: <span class="hljs-tag">&lt;/<span class="hljs-title">label</span>&gt;</span>
  	<span class="hljs-tag">&lt;<span class="hljs-title">input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"toChildData"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">ToChild</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"child"</span> <span class="hljs-attribute">:toChildData</span>=<span class="hljs-value">"toChildData"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-keyword">import</span> ToChild <span class="hljs-keyword">from</span> <span class="hljs-string">'./_toChild.vue'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attribute">name</span>: <span class="hljs-string">'DataTransform'</span>,
  <span class="hljs-attribute">components</span>: {
  	ToChild,
  },
  data () {
  	<span class="hljs-keyword">return</span> {
  		<span class="hljs-attribute">toChildData</span>: <span class="hljs-string">''</span>,
  	}
  },
}</code></pre>
  	<!-- code end -->
  	<p  style="margin-top: 10px">子组件:</p>
  	<!-- code -->
<pre class='hljs'><code><span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">label</span>&gt;</span>子组件数据: <span class="hljs-tag">&lt;/<span class="hljs-title">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"toChildData"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-literal">export</span> <span class="hljs-keyword">default</span> {
    name: <span class="hljs-string">'ToChild'</span>,
    props: {
        toChildData: {
            type: <span class="hljs-built_in">String</span>,
            <span class="hljs-keyword">default</span>: <span class="hljs-string">''</span>,
        }
    },
    computed: {
        childDate: {
            <span class="hljs-literal">get</span> () {
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.toChildData
            },
            <span class="hljs-literal">set</span> (value) {},
        },
    },
}
</code></pre>
  	<!-- code end -->
	</div>
</template>