<template>
  <p>count: {{ count }}</p>
  <p>double: {{ double }}</p>
  <button @click="increase">👍+1</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

/**
 *  ref       初始值
 *  computed  计算属性
 */

export default defineComponent({
  name: 'App',
  setup() { //  setup 就是准备的意思，是在生命周期之前运行的

    // ref 是一个函数，设置这的初始值
    const count = ref<number>(0);
    // computed 计算属性, 创建一个计算值
    const double = computed((): number => {
      return count.value * 2;
    })

    // 定义一个方法
    const increase = (): void => {
      count.value++;
    }

    // 返回响应式对象
    return {
      count,
      double,
      increase, //  导出 increase 的方法
    }

  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
