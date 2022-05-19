<template>
  <div>
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button @click="btnHandler1" class="px-3 mx-2 bg-pink-500 rounded">+1</button>
    <button @click="btnHandler2" class="px-3 mx-2 bg-purple-500 rounded">+N</button>
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
  },
}
</script>

<style scoped></style>
