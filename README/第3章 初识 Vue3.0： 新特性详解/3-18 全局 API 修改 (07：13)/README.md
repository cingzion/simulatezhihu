## 3-18 全局 API 修改 (07：13)

- Vue3 新的写法
```js

    import { createApp } from 'vue';
    import app from './App';

    const app = createApp(App);
    app.config.isCustomElement = tag => tag.startsWith('app-');
    app.use(/*....*/);
    app.mixin(/*....*/);
    app.component(/*....*/);
    app.directive(/*....*/);

    app.config.globalProperties.customProperty = () => {};

    app.mount('#app');

```

- 全局配置：Vue.config -> app.config
    + config.productionTip 被删除
    + config.ignoredElements 改名为 config.isCustomElement
    + config.keyCodes 被删除

- 全局注册类 API
    + Vue.component -> app.component
    + Vue.directive -> app.directive

- 行为扩展类 API
    + Vue.mixin - app.mixin
    + Vue.use -> app.use


- Global API Treeshaking
```js
    // Vue2
    import Vue from 'vue';
    Vue.nextTick(() => {});
    const obj = Vue.observable({});

    // Vue3
    import Vue, { nextTick, observable } from 'vue';
    Vue.nextTick // undefined
    nextTick(() => {});

    const obj = observable({});
```
 