<template>
  <div class="home">
    <my-addition></my-addition>

    <p>----------------------------------------------------------------</p>

    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from '../components/Addition.vue'
import Subtraction from '../components/Subtraction.vue'

export default {
  name: 'Home',
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
  },
}
</script>
