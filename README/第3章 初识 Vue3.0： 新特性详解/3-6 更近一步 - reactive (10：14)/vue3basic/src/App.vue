<template>
  <p>count: {{ count }}</p>
  <p>double: {{ double }}</p>
  <button @click="increase">👍+1</button>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue';

/**
 *  ref       初始数据
 *  computed  计算属性
 *  reactive  初始对象
 *  toRefs    响应试对象
 */

interface DataProps {
  count: number;
  double: number;
  increase(): void;
}

export default defineComponent({
  name: 'App',
  setup() { //  setup 就是准备的意思，是在生命周期之前运行的

    // ref 是一个函数，设置这的初始值
    /*const count = ref<number>(0);*/
    // computed 计算属性, 创建一个计算值
    /*const double = computed((): number => {
      return count.value * 2;
    })*/

    // 定义一个方法
    /*const increase = (): void => {
      count.value++;
    }*/


    // reactive 初始对象，使用 reactive 改造

    const data: DataProps = reactive({
      count: 0,
      increase: (): void => {
        data.count++;
      },
      double: computed((): number => data.count * 2)
    })

    // toRefs 使用响应式对象
    const refData = toRefs(data);

    // 对象
    return {
      ...refData, // 展开的每一项都是响应式对象
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
