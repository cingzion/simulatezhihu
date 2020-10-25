## 3-2 为什么会有 vue3 (07：09)

- 为什么要用 Vue3？
    
    
- Vue2 遇到的难题
    + 随着功能的增长，复杂 组件 的代码蛮得难以维护
    + 有点费解？举例说明
        - 热门 Vue React Angular
        - 1 2 3 4
        - 代码如下：
        ```js
        export default {
              deta() {
                return { 
                    filter: {},
                    pagination: {},
                }
              },
              methods: {
                filterMethod: () => { },
                paginationMethod: () => {},
              },
              computed: {
                          ...
              }
        }
        ``` 
- 随着复杂度的上长，带来的问题

- Mixin 的解决方案
```js
// Mixin 的解决方案, 解决归类的问题
const filterMixin = {
    data() {
        return {}
    },
    methods: {

    }
}

const paginationMixin = {
    data() {
        return {}
    },
    methods: {

    }
}

export default {
    mixins: [filterMixin, paginationMixin]
}

```
- Mixin 的缺点
    + 命名冲突
    + 不清楚暴露出来的变量的作用
    + 重用到其它 component 经常会遇到问题
    
- Vue2 遇到的难题
    + Vue2 对于 TypeScript 的支持常的有限
