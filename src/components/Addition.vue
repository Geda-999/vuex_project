<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="btnHandler1" class="px-3 mx-2 bg-pink-500 rounded">+1</button>
    <button @click="btnHandler2" class="px-3 mx-2 bg-purple-500 rounded">+N</button>
    <button @click="btnHandler3" class="px-3 mx-2 bg-fuchsia-500 rounded">+ Async</button>
    <button @click="btnHandler4" class="px-3 mx-2 bg-blue-500 rounded">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandler1() {
      // 这种写法是错误了
      // this.$store.state.count++
      this.$store.commit('add')
    },
    btnHandler2() {
      // commit的作用,就是调用 某个 mutation 函数
      this.$store.commit('addN', 3)
    },
    // 异步地让 count 自增 +1
    btnHandler3() {
      // 这里的 dispatch 函数，专门用来触发 action函数
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      this.$store.dispatch('addNAsync', 5)
    },
  },
}
</script>

<style scoped></style>
