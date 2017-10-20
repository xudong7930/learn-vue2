<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <!-- hot module load -->
    <counter></counter>
  
    <!-- // webpack and vue -->
    <message>some One morning, when Gregor Samsa woke from troubled dreams, he found himself
    transformed in his bed into a horrible vermin. He lay on his armour-like back,
    and if he lifted his head a little he could see his brown belly, slightly domed
    and divided by arches into stiff sections. The bedding was hardly able to cover
    it and seemed ready to slide off any moment. His many legs, pitifully thin
    compared with the size of the rest of him, waved about helplessly as he looked.
    "What's happened to me? " he thought.</message>
  </div>
</template>

<script>
  import counter from './components/counter.vue'
  import message from './components/message.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      message,
      counter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
