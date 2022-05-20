<template>
  <div id="app">
    <a-input :value="inputValue" @change="handleInputChange" placeholder="请输入任务" class="my_ipt" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <!-- checked 这个是动态判定的复选框的值是否为false true -->
        <a-checkbox
          :checked="item.done"
          @change="
            e => {
              cbStatusChanged(e, item.id)
            }
          ">
          {{ item.info }}
        </a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{ unDoneLength }}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="viewKey === 'all' ? 'primary' : 'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewKey === 'undone' ? 'primary' : 'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewKey === 'done' ? 'primary' : 'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="clean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      //   list: [],
    }
  },
  // 生命周期
  created() {
    // console.log(this.$store);
    // 调用vuex文件里面的函数
    // dispatch 是专门来调用触发actions里面的函数
    // getList就是vuex里面的函数名称啦
    this.$store.dispatch('getList')
  },
  methods: {
    // 监听文本框内容变化
    handleInputChange(e) {
      // 通过 e.target.value 就可以拿到文本框最新的值
      console.log(e.target.value)
      // 想调用那个mutations参数的名称，就往里一丢就行了
      // 第二个形参就是上面打印了那个
      this.$store.commit('setInputValue', e.target.value)
    },
    // 向列表中新增 item 项
    addItemToList() {
      // 哪咋们先做判断 用户输入的值 是否为空
      // 如果用户输入的为空 就不走添加的流程
      if (this.inputValue.trim().length <= 0) {
        // 为空就弹出警告提示信息
        // 这个函数是ui组件库提供了 跟el差不多
        this.$message.warning('文本框内容不能为空！')
      }

      // 这个调用函数是从vuex的mutations来了
      this.$store.commit('addItem')
    },
    // 根据Id删除对应的任务事项
    removeItemById(id) {
      //   console.log(id)
      // 通过this点$store调用commit函数 哪commit里面要触发那个mutations
      // 就将对应的名称 给他丢进去 同时id也要传进去
      this.$store.commit('removeItem', id)
    },
    // 监听复选框选中状态变化的事件
    cbStatusChanged(e, id) {
      // 通过e.target.checked 可以接收到最新的选中状态
      //   console.log(e.target.checked)
      //   console.log(id)
      const param = {
        id: id,
        status: e.target.checked,
      }

      // 通过commit触发一个changeStatus
      this.$store.commit('changeStatus', param)
    },
    // 清除已完成的任务
    clean() {
      // 这里不能直接去操作state里面的数据
      // 咋们需要要调用对应的mutations才行
      this.$store.commit('leanDone')
    },
    // 修改页面上展示的列表数据
    changeList(key) {
      console.log(key)
      this.$store.commit('changeViewKey', key)
    },
  },

  // 计算属性
  computed: {
    // 调用函数mapState里放一个数组
    // 数组里面你要映射或者说你要使用哪个数据了，你就把需要使用的数据名称，放在这个数组中
    ...mapState(['inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength', 'infoList']),
  },
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
