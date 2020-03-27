<template>
<div>
<p>父组件</p>
<pre class='hljs'><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span>=</span><span class="hljs-string">"far"</span>&gt;
    &lt;label&gt;多参数父组件数据: &lt;/label&gt;
    &lt;input v-model=<span class="hljs-string">"multipleDataObj.dataOne"</span> <span class="hljs-class"><span class="hljs-keyword">type</span>=</span><span class="hljs-string">"text"</span>/&gt;
    &lt;input v-model=<span class="hljs-string">"multipleDataObj.dataTwo"</span> <span class="hljs-class"><span class="hljs-keyword">type</span>=</span><span class="hljs-string">"text"</span>/&gt;
&lt;/div&gt;
&lt;<span class="hljs-type">Bidirectional3</span> <span class="hljs-class"><span class="hljs-keyword">class</span>=</span><span class="hljs-string">"child"</span> v-bind.sync=<span class="hljs-string">"multipleDataObj"</span>/&gt;
<span class="hljs-reserved">export</span> <span class="hljs-reserved">default</span> {
    <span class="hljs-attribute">name</span>: <span class="hljs-string">'DataTransform'</span>,
    data () {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attribute">multipleDataObj</span>: {
                <span class="hljs-attribute">dataOne</span>: <span class="hljs-string">''</span>,
                <span class="hljs-attribute">dataTwo</span>: <span class="hljs-string">''</span>,
            },
        }
    },
}</code></pre>
<p style="margin-top: 10px;">子组件</p>
<pre class='hljs'><code>&lt;<span class="hljs-keyword">template</span>&gt;
  &lt;<span class="hljs-keyword">div</span>&gt;
  &lt;label&gt;多参数子组件数据: &lt;/label&gt;
  &lt;input v-model=<span class="hljs-string">"childValueOne"</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
  &lt;input v-model=<span class="hljs-string">"childValueTwo"</span> style=<span class="hljs-string">"margin-left: 10px"</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/<span class="hljs-keyword">template</span>&gt;

&lt;script&gt;
<span class="hljs-keyword">export</span> default {
  name: '<span class="hljs-type">Bidirectional3</span>',
  props: {
    dataOne: <span class="hljs-type">String</span>,
    dataTwo: <span class="hljs-type">String</span>,
  },
  computed: {
    childValueOne: {
      get () {
        <span class="hljs-keyword">return</span> this.dataOne
      },
      <span class="hljs-type">set</span> (value) {
        this.$emit('update:dataOne', value)
      },
    },
    childValueTwo: {
      get () {
        <span class="hljs-keyword">return</span> this.dataTwo
      },
      <span class="hljs-type">set</span> (value) {
        this.$emit('update:dataTwo', value)
      },
    },
  },
}
&lt;/script&gt;
</code></pre>
</div>
</template>