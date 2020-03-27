<template>
<div>
	<p>父组件</p>
<pre class='hljs'><code><span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"far"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">label</span>&gt;</span>单参数父组件数据: <span class="hljs-tag">&lt;/<span class="hljs-title">label</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"multipleData"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Bidirectional2</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"child"</span> <span class="hljs-attribute">:multipleData.sync</span>=<span class="hljs-value">"multipleData"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></code></pre>
<p style="margin-top: 10px;">子组件</p>
<pre class='hljs'><code><span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">label</span>&gt;</span>单参数子组件数据: <span class="hljs-tag">&lt;/<span class="hljs-title">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">input</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"childValue"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-keyword">export default</span> {
  name: <span class="hljs-string">'Bidirectional2'</span>,
  props: {
    multipleData: String,
  },
  computed: {
    childValue: {
      <span class="hljs-keyword">get</span> () {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.multipleData
      },
      <span class="hljs-keyword">set</span> (<span class="hljs-keyword">value</span>) {
        <span class="hljs-keyword">this</span>.$emit(<span class="hljs-string">'update:multipleData'</span>, <span class="hljs-keyword">value</span>)
      },
    },
  },
}</code></pre>
</div>
</template>