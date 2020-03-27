<template>
	<div>
		<p>父组件</p>
<pre class='hljs'><code><span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"far"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">label</span>&gt;</span>父组件数据: <span class="hljs-tag">&lt;/<span class="hljs-title">label</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"singleData"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Bidirectional1</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"child"</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"singleData"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attribute">name</span>: <span class="hljs-string">'DataTransform'</span>,
  <span class="hljs-attribute">components</span>: {
  	Bidirectional1,
  },
  data () {
  	<span class="hljs-keyword">return</span> {
      	<span class="hljs-attribute">	singleData</span>: <span class="hljs-string">''</span>,
  	}
  },
}</code></pre>
	<p style="margin-top: 10px">子组件</p>
<pre class='hljs'><code>&lt;<span class="hljs-keyword">template</span>&gt;
  &lt;<span class="hljs-keyword">div</span>&gt;
	&lt;label&gt;子组件数据: &lt;/label&gt;
	&lt;input v-model=<span class="hljs-string">"childValue"</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/<span class="hljs-keyword">template</span>&gt;
<span class="hljs-keyword">export</span> default {
  name: '<span class="hljs-type">Bidirectional1</span>',
  model: {
    prop: 'singleData',
    event: 'change',
  },
  props: {
  	singleData: <span class="hljs-type">String</span>,
  },
  computed: {
    childValue: {
      get () {
        <span class="hljs-keyword">return</span> this.singleData
      },
      <span class="hljs-type">set</span> (value) {
        this.$emit('change', value)
      },
    },
  },
}
</code></pre>
	</div>
</template>