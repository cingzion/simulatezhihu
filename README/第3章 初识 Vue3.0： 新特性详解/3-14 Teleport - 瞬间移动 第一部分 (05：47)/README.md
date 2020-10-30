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

