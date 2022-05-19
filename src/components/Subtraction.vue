<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnHandler1" class="px-3 mx-2 bg-yellow-500 rounded">-1</button>
    <button @click="btnHandler2" class="px-3 mx-2 bg-red-500 rounded">-N</button>
  </div>
</template>

<script>
// 导入函数
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  // 计算属性
  computed: {
    // 调用函数mapState里放一个数组
    // 数组里面你要映射或者说你要使用哪个数据了，你就把需要使用的数据名称，放在这个数组中
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    btnHandler1() {
      // 调用
      this.sub()
    },
    btnHandler2() {
      // 调用
      this.subN(3)
    },
  },
}
</script>

<style scoped></style>
