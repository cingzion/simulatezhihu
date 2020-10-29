<template>
  <div>
    <p>count: {{ count }}</p>
    <p>double: {{ double }}</p>
    <ul>
      <li v-for="number in numbers" :key="number"><h1>{{ number }}</h1></li>
    </ul>
    <h1>{{ person.name }}</h1>
    <button @click="increase">👍+1</button>

    <p>{{ greetings }}</p>
    <div><button @click="updateGreeting">Update Title</button></div>

    <h1>X: {{ x }}, Y: {{ y }}</h1>

    <div>
      <h1>图片展示</h1>
      <h1 v-if="loading">Loading!...</h1>
      <img v-if="loaded" :src="result.message" />
    </div>
    
  </div>
</template>

<script lang="ts">
import { 
  ref,
  defineComponent,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onUnmounted,
  onRenderTracked,
  watch, 
} from 'vue';

import { useMounsePosition, useMounsePositionReactive } from './hooks/useMounsePosition';
import { useURLLoader } from './hooks/useURLLoader';
/**
 *  ref       初始数据
 *  computed  计算属性
 *  reactive  初始对象
 *  toRefs    响应试对象
 *  onMounted 当加加载组件之前
 *  onUpdated 当更新组件之后
 *  onUnmounted 当数组卸载之后
 *  onRenderTracked 观察数据变化
 *  watch    监听器
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
    /* 
    onMounted((): void => {
      console.log('on Mounted');
    });
    */

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


   // watch 监听器
    const greetings = ref<string>('');
    const updateGreeting = (): void => {
      greetings.value += 'hello!';
    }
    /**
     * watch(第一个参数，第二个参数)
     * 第一个参数是响应式对象
     * 第二个是,是它要变化,执行的函数体
     */
      /* watch(greetings, (newValue, oldValue) => {
        // newValue 新的值
        // oldValue 旧的值
        console.log("newValue 新的值: ", newValue);
        
        console.log("oldValue 旧的值: ", oldValue);
        
        document.title = `updated ${greetings.value}`
      })
      */


    /*
     // 3-10 vue3 模块化妙用- 鼠标追踪器 (09：04) start
     const x = ref(0);
     const y = ref(0);

     // 定义一个事件
     const updateMouse = (e: MouseEvent): void => {
       x.value = e.pageX; // 当前点击的x坐标
       y.value = e.pageY; // 当前点击的x坐标
     }

    // 添加这个事件
     onMounted((): void => {
       document.addEventListener('click', updateMouse, false);
     });

     // 删除这个事件
     onUnmounted((): void => {
       document.removeEventListener('click', updateMouse, false);
     });
     // 3-10 vue3 模块化妙用- 鼠标追踪器 (09：04) start
 
    */

    const { x, y } = useMounsePositionReactive();

    const { result, loading, error, loaded } = useURLLoader(`https://dog.ceo/api/breeds/image/random`);

     watch([greetings, () => data.count], (newValue, oldValue) => {
        // newValue 新的值
        // oldValue 旧的值
        console.log("newValue 新的值: ", newValue);
        console.log("oldValue 旧的值: ", oldValue);
        
        
        document.title = `updated ${greetings.value + data.count}`
    })





    // toRefs 使用响应式对象
    const refData = toRefs(data);

    // 对象
    return {
      ...refData, // 展开的每一项都是响应式对象
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
      error,
      loaded

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
