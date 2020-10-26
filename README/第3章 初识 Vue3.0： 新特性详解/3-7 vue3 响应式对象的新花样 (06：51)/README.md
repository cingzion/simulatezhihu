## 3-7 vue3 响应式对象的新花样 (06：51)

- Proxy 对象用于定义基本操作的自定义行为(如属性查找、赋值、枚举、函数调用等)

- 两段代码对比
```js
    Object.defineProperty(
        data, 
        'count',
        {
            get() {},
            set() {},
        }
    );
    
    
    new Proxy(
        data,
        {
            get(key) {},
            set(key, value) {},
        }

    )



   
```
