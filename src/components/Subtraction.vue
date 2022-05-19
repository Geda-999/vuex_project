<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ count }}</h3> -->
    <!-- 正常写法 -->
    <!-- <button @click="btnHandler1" class="px-3 mx-2 bg-yellow-500 rounded">-1</button>
    <button @click="btnHandler2" class="px-3 mx-2 bg-red-500 rounded">-N</button>
    <button @click="btnHandler3" class="px-3 mx-2 bg-green-500 rounded">-1 Async</button> -->

    <!-- 简写法 -->
    <h3>{{ showNum }}</h3>
    <button @click="sub" class="px-3 mx-2 bg-yellow-500 rounded">-1</button>
    <button @click="subN(3)" class="px-3 mx-2 bg-red-500 rounded">-N</button>
    <button @click="subAsync" class="px-3 mx-2 bg-green-500 rounded">-1 Async</button>
    <button @click="subAsync(3)" class="px-3 mx-2 bg-violet-500 rounded">-1N Async</button>
  </div>
</template>

<script>
// 导入函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  // 计算属性
  computed: {
    // 调用函数mapState里放一个数组
    // 数组里面你要映射或者说你要使用哪个数据了，你就把需要使用的数据名称，放在这个数组中
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
  methods: {
    // 调用函数
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subAsync']),
    // btnHandler1() {
    //   // 调用
    //   this.sub()
    // },
    // btnHandler2() {
    //   // 调用
    //   this.subN(3)
    // },
    // btnHandler3() {
    //   this.subAsync()
    // },
  },
}
</script>

<style scoped></style>
