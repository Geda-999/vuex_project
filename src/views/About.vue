<template>
  <div class="about">
    <h1>{{ list.title }}</h1>
    <p>
      {{ list.paragraph }}
      <b>{{ list.section }}</b>
      啦！！！
    </p>

    <!-- <div>
      {{ this.$store.state.animal.animalName }}
      <button @click="$store.commit('setName', '老虎')">改名</button>
    </div> -->

    <div>
      {{ animalName }}
      <a-button type="primary" @click="setName('老鹰')">改名</a-button>
    </div>

    <div v-for="(item, index) in tt.stock">
      <a-tag color="pink">
        {{ item.goodsId }}
      </a-tag>
      <a-tag color="orange">
        {{ item.name }}
      </a-tag>
      <a-tag color="green">
        {{ item.number }}
      </a-tag>
    </div>

    <!-- <div v-for="(items, i) in addName.order" :key="i">{{ items.name }}</div> -->
    <div>
      <a-menu mode="horizontal">
        <a-menu-item v-for="(items, i) in addName.order" :key="i">
          <a-icon :type="items.Icon" />
          {{ items.name }}
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
// 从 Vuex 中导入 mapState mapMutations
import { mapState, mapMutations, mapActions } from 'vuex'

// 这种只能接收一个模块，建议不要用
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapMutations, mapActions } = createNamespacedHelpers('animal')
export default {
  // 生命周期

  created() {
    this.$store.dispatch('animal/getTt')
    this.$store.dispatch('acom/getCom')
  },
  computed: {
    // mapState 使用方式和之前有些许不同，第一个是module挂载的模块名
    // 第二个参数是 animal 模块中的 state 属性
    ...mapState('animal', ['animalName']),
    ...mapState('animal', ['tt']),
    ...mapState('animal', ['list']),
    ...mapState('acom', ['addName']),

    // 第二种写法
    // ...mapState(['animalName']),
    // ...mapState(['tt']),
    // ...mapState(['list']),
    // ...mapState(['addName']),
  },
  methods: {
    // mapMutations 使用方式也和之前有些许不同，第一个是module挂载的模块名
    // 第二个参数是 animal 模块中的 mutation 方法
    ...mapMutations('animal', ['setName']),
    ...mapActions('animal', ['getTt']),

    // 第二种写法
    // ...mapMutations(['setName']),
    // ...mapActions(['getTt']),
  },
}
</script>

<style scoped></style>
