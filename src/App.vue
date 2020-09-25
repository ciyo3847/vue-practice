<!--
 * @Author: YZY
 * @Date: 2020-03-27 16:52:49
 * @LastEditTime: 2020-09-02 09:51:37
 * @FilePath: /vue-practice/src/App.vue
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/data-transform">vue组件之间的数据传输</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/render">render 函数练习</router-link>
    </div>
    <router-view class="content"/>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  font-size: 14px;
}

#nav {
  padding: 10px;
  width: 250px;
  height: calc(100vh);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h1, h2 {
  margin-bottom: 20px;
  color: #000000;
}
h3, h4 {
  margin-bottom: 10px;
  color: #000000;
}
h5 {
  margin-bottom: 6px;
  color: #000000;
}
p {
  margin: 0 0 10px 0;
}
.content {
  margin-left: 250px;
  padding: 10px;
  max-width: 800px;
}
.mar-b-10 {
  margin-bottom: 10px;
}
.mar-t-10 {
  margin-top: 10px;
}
</style>
