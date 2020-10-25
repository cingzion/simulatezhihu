## 2-12 泛型（Generics） 第一部分 (07：28)

```tsx
    // 2-12 泛型（Generics） 第一部分 (07：28)
    function echo(arg: number) : number {
        return arg;
    }
    
    const result = echo(123);
    
    
    // 使用泛型 T 想当于是占位符
    function echoGenerics<T>(arg: T): T {
        return arg;
    }
    
    
    const resulta: string = echoGenerics('2223');
    const resultb: number = echoGenerics(123);
    
    function swap<T, U>(tuple: [T, U]): [U, T] {
        return [tuple[1], tuple[0]]
    }
    
    const resultc = swap(['string', 123]);
    console.log(resultc[1])
    

```
