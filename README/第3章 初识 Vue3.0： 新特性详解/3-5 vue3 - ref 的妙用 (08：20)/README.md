## 3-5 vue3 - ref 的妙用 (08：20)

- Vue2 中的写法
```jsx harmony
    // App.vue
    <template>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      <button @click="increase">👍+1</button>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import HelloWorld from './components/HelloWorld.vue';
    
    export default defineComponent({
      name: 'App',
      components: {
        HelloWorld
      },
      data() {
        return {
          count: 0
        }
      },
      methods: {
        increase() {
          this.count++;
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

- Vue3 中的写法
```jsx harmony
    // App.vue
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

```
