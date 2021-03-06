## 3-14 Teleport - 瞬间移动 第一部分 (05：47)

- 遇到的问题
```jsx
    顶层组件----挂载--->顶层DOM节点
        |
        |
        ⇣
    各种子组件...        
        |                   
        X                    
        |                   
        ⇣          
    Dialog组件 
    

    <div clas="foo">
        <div class="foo">
            <div>....</div>
            <Dialog v-if="dialogOpen"/>
        </div>
    </div>
```

- Dialog 被包裹在其它组件之中，容易被干扰
- 样式也在其它组件中，容易变得非常混乱
    > 希望的解决方案
    ```jsx
        顶层组件----挂载--->顶层DOM节点
            |
            |
            ⇣
        各种子组件...       顶层另外一个DOM节点
            |                   ↑
            X                   |
            |                  挂载
            ⇣             ------↑
        Dialog组件------↗
    ```

- 案例
```jsx

// index.html 页面
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <div id="modal"></div>
    <!-- built files will be auto injected -->
  </body>
</html>


// Modal.vue 组件
<template>
    <!-- 
        <div id="modal"></div>  补渲染的DOM
        <teleport to="#modal"></teleport> 要渲染到的DOM的ID上为 modal名字上

        teleport 瞬间移动的组件，vue3的特性，它有一个参数 to
            to 就是想要把它渲染到哪个DOM上去, 
            to="#modal" 这里的 #modal，就是要渲染到一个 dom元素有一个 id 为 modal 上去的元素上节点



     -->
    <teleport to="#modal">
        <div id="center">
            <h2>tis is a modal</h2>
        </div>
    </teleport>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({

});
</script>

<style scoped>
    #center {
        width: 200px;
        height: 200px;
        border: 2px solid black;
        background: white;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -100px;
    }
</style>



// App.vue 组件
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
      <!-- <img v-if="loaded" :src="result.message" /> -->
      <img v-if="loaded" :src="result[0].url" />
    </div>
    
    <Modal />
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
import Modal from './components/Modal.vue';
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
  },
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


     watch([greetings, () => data.count], (newValue, oldValue) => {
       // newValue 新的值
        // oldValue 旧的值
        console.log("newValue 新的值: ", newValue);
        console.log("oldValue 旧的值: ", oldValue);
        
        
        document.title = `updated ${greetings.value + data.count}`
    })





    // toRefs 使用响应式对象
    const refData = toRefs(data);

    // const { result, loading, loaded } = useURLLoader<DogResult>(`https://dog.ceo/api/breeds/image/random`);
    const { result, loading, loaded } = useURLLoader<CatResult[]>(`https://api.thecatapi.com/v1/images/search?limit=1`);
    watch(result, () => {
      console.log(result.value);
      if(result.value) {
        // console.log('vlaue', result.value.message);
        console.log('vlaue', result.value[0].url);
        
      }
      
    })

    // 对象
    return {
      ...refData, // 展开的每一项都是响应式对象
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
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

```

