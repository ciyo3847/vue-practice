<template>
	<div>
		<p>父组件</p>
<pre class='hljs'><code>&lt;<span class="hljs-keyword">template</span>&gt;
    &lt;<span class="hljs-keyword">div</span> class=<span class="hljs-string">"far"</span>&gt;
        &lt;label&gt;父组件数据: &lt;/label&gt;
        &lt;input v-model=<span class="hljs-string">"multipleData3"</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
    &lt;/<span class="hljs-keyword">div</span>&gt;
    &lt;<span class="hljs-type">Bidirectional4</span> class=<span class="hljs-string">"child"</span> :multipleData=<span class="hljs-string">"multipleData3"</span> @changeDate=<span class="hljs-string">"changeMultipleData"</span>/&gt;
&lt;/<span class="hljs-keyword">template</span>&gt;

&lt;script&gt;
<span class="hljs-keyword">export</span> default {
    data () {
        <span class="hljs-keyword">return</span> {
            multipleData3: '',
        }
    },
    methods: {
        changeMultipleData (value) {
            this.multipleData3 = value
        },
    },
}
&lt;/script&gt;
</code></pre>
	<p style="margin-top: 10px;">子组件</p>
<pre class='hljs'><code>&lt;<span class="hljs-keyword">template</span>&gt;
  &lt;<span class="hljs-keyword">div</span>&gt;
	&lt;label&gt;子组件数据: &lt;/label&gt;
	&lt;input v-model=<span class="hljs-string">"childValue"</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/<span class="hljs-keyword">template</span>&gt;

&lt;script&gt;
<span class="hljs-keyword">export</span> default {
  name: '<span class="hljs-type">Bidirectional4</span>',
  props: {
  	multipleData: <span class="hljs-type">String</span>,
  },
  computed: {
    childValue: {
      get () {
        <span class="hljs-keyword">return</span> this.multipleData
      },
      <span class="hljs-type">set</span> (value) {
        this.$emit('changeDate', value)
      },
    },
  },
}
&lt;/script&gt;
</code></pre>
	</div>
</template>