## 2-7 函数 (06：52)

- Function 函数
    + 在 JS 中，函数是一等公民。
    
```tsx
  // 2-7 函数 (06：52)
  
  const add =  (x: number, y: number, z?: number) : number => {
      if(typeof z === 'number'){
          return x + y;
      } else {
          return x + y + z;
      }
  }
  
  interface ISum {
      (x: number, y: number, z?: number): number;
  }
  
  // let add2: (x: number, y: number, z?: number) => number = add;
  let add2:ISum = add;
  
```
    
