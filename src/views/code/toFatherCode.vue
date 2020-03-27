<template>
	<div>
		<p>父组件</p>
<pre class='hljs'><code>&lt;<span class="hljs-keyword">template</span>&gt;
  &lt;<span class="hljs-keyword">div</span>&gt;
	&lt;<span class="hljs-keyword">div</span> class=<span class="hljs-string">"far"</span>&gt;
		&lt;label&gt;父组件数据: &lt;/label&gt;
		&lt;input v-model=<span class="hljs-string">"toFatherData"</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
	&lt;/<span class="hljs-keyword">div</span>&gt;
	&lt;<span class="hljs-type">ToFather</span> class=<span class="hljs-string">"child"</span> @onToFather=<span class="hljs-string">"onToFather"</span>/&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/<span class="hljs-keyword">template</span>&gt;
<span class="hljs-keyword">import</span> ToFather <span class="hljs-keyword">from</span> <span class="hljs-string">'./_toFather.vue'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attribute">name</span>: <span class="hljs-string">'DataTransform'</span>,
  <span class="hljs-attribute">components</span>: {
  	ToFather,
  },
  data () {
  	<span class="hljs-keyword">return</span> {
      	<span class="hljs-attribute">	toFatherData</span>: <span class="hljs-string">''</span>,
  	}
  },
  mounted () {
  },
  <span class="hljs-attribute">methods</span>: {
  	onToFather (data) {
  		<span class="hljs-keyword">this</span>.toFatherData = data
  	},
  },
}</code></pre>
	<p style="margin-top: 10px">子组件</p>
<pre class='hljs'><code><span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">label</span>&gt;</span>子组件数据: <span class="hljs-tag">&lt;/<span class="hljs-title">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"toFatherData"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="javascript">
<span class="hljs-keyword">export default</span> {
    name: <span class="hljs-string">'ToFather'</span>,
    data () {
        <span class="hljs-keyword">return</span> {
            toFatherData: <span class="hljs-string">''</span>,
        }
    },
    watch: {
        toFatherData (newValue, oldValue) {
            <span class="hljs-keyword">this</span>.$emit(<span class="hljs-string">'onToFather'</span>, newValue)
        },
    },
};
</span>
</code></pre>
	</div>
</template>