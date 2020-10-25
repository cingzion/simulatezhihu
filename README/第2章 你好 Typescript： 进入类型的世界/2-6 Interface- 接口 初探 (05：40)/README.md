## 2-6 Interface- 接口 初探 (05：40)

- Interface 接口
    + 对对象的形状 ( shape ) 进行描述
    
    + Duck Typing (鸭子类型)
    
```tsx
    // 2-6 Interface- 接口 初探 (05：40)
    
    interface IPerson {
        readonly id: number;    // 只读属性
        name: string;
        age?: number;           // ? 可选属性
    }
    
    let jean: IPerson = {
        id: 7,
        name: 'jean',
        age: 20,
    }
    
    // jean.id = 66; // 这里就不可以修改了

```
