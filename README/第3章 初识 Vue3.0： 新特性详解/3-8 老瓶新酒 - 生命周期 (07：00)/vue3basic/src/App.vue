<template>
  <div>
    <p>count: {{ count }}</p>
    <p>double: {{ double }}</p>
    <ul>
      <li v-for="number in numbers" :key="number"><h1>{{ number }}</h1></li>
    </ul>
    <h1>{{ person.name }}</h1>
    <button @click="increase">👍+1</button>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTracked,
} from 'vue';

/**
 *  ref       初始数据
 *  computed  计算属性
 *  reactive  初始对象
 *  toRefs    响应试对象
 *  onMounted 当加加载组件之前
 *  onUpdated 当更新组件之后
 *  onRenderTracked 观察数据变化
 */

interface DataProps {
  count: number;
  double: number;
  increase(): void;
  numbers: number[];
  person: { name?: string };
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

    // 生命周期 start
    // 组件加载之前
    onMounted((): void => {
      console.log('on Mounted');
    });
    // 组件更新之后
    onUpdated((): void => {
      console.log('on Updated');
      
    });
    // 生命周期 end

    // 观察数据的变化 start
    onRenderTracked((event): any => {
      console.log("on RenderTracked", event);
      /*
       {target: Array(3), type: "get", key: "2", effect: ƒ}
        effect: ƒ reactiveEffect()
        key: "2"
        target: (3) [5, 1, 2]
        type: "get"
        __proto__: Object
      */
    });
    
    // 观察数据的变化 end

    // reactive 初始对象数据，使用 reactive 改造

    const data: DataProps = reactive({
      count: 0,
      increase: (): void => {
        data.count++;
      },
      double: computed((): number => data.count * 2),
      numbers: [0, 1, 2],// 初始化数据
      person: {}
    });

    data.numbers[0] = 5;
    data.person.name = 'jean';

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
