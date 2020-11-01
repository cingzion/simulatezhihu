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

    <button @click="openModal"> open Modal </button>
    <Modal :isOpen="modalIsOpen" @close-modal="onModalClose"> My Modal !!!!</Modal>

    <div>
      <h1>图片展示</h1>
      <h1 v-if="loading">Loading!...</h1>
      <!-- <img v-if="loaded" :src="result.message" /> -->
      <img v-if="loaded" :src="result[0].url" />
    </div>

    <div>
      <h1>使用 Suspense </h1>
      <Suspense>
        <template #default>
          <async-show />
          <dog-show />
        </template>  
        <template #fallback>
          <h1>Loading !...</h1>
        </template>
      </Suspense>
    </div>

    <div>
      <h1>使用 onErrorCaptured </h1>
      <p>{{ error }}</p>
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
  onErrorCaptured,
} from 'vue';

import { useMounsePosition, useMounsePositionReactive } from './hooks/useMounsePosition';
import { useURLLoader } from './hooks/useURLLoader';
import Modal from './components/Modal.vue';
import AsyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'
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
 * onErrorCaptured 错误方法
 */

interface DataProps {
  count: number;
  double: number;
  increase(): void;
  numbers: number[];
  person: { name?: string };
}

// API 返回的类型
interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default defineComponent({
  name: 'App',
  components: {
    Modal,
    AsyncShow,
    DogShow,
  },
  setup() { //  setup 就是准备的意思，是在生命周期之前运行的
    const error = ref(null);
    // 错误方法
    onErrorCaptured((e: any) => {
      error.value = e;
      return true;
    }) 

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


     watch([greetings, () => data.count], (newValue, oldValue) => {
       // newValue 新的值
        // oldValue 旧的值
        console.log("newValue 新的值: ", newValue);
        console.log("oldValue 旧的值: ", oldValue);
        
        
        document.title = `updated ${greetings.value + data.count}`
    })





    // toRefs 使用响应式对象
    const refData = toRefs(data);

    // 打开模态跨的操作
    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    }

    const onModalClose = () => {
        modalIsOpen.value = false;
    }

    // const { result, loading, loaded } = useURLLoader<DogResult>(`https://dog.ceo/api/breeds/image/random`);
    const { result, loading, loaded } = useURLLoader<CatResult[]>(`https://api.thecatapi.com/v1/images/search?limit=1`);
    watch(result, () => {
      console.log(result.value);
      if(result.value) {
        // console.log('vlaue', result.value.message);
        console.log('vlaue', result.value[0].url);
      }
    });

    // 对象
    return {
      ...refData, // 展开的每一项都是响应式对象
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
      loaded,
      modalIsOpen,
      openModal,
      onModalClose,
      error,
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
