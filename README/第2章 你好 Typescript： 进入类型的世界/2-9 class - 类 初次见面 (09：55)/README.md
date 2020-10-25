## 2-9 class - 类 初次见面 (09：55)

- 类 Class
    + 类  Class) ： 定义了一切事物的抽象特点
    + 对象 (Object)：类的实例
    + 面向对象（OOP）三大特性：封装、继承、多态
    ```js
       // 2-9 class - 类 初次见面 (09：55)
       
       // js
       
       
       // 类
       class Animal {
           constructor(name) {
               this.name = name;
           }
       
           run() {
               return `${this.name} is renning`;
           }
       }
       
       const snake = new Animal('lily');
       console.log(snake.run())
       
       // 继承
       class Dog extends Animal {
           bark() {
               return `${this.name} is renning`;
           }
       }
       
       const xiaobao = new Dog("xiaobabo")
       console.log(xiaobao.run());
       console.log(xiaobao.bark());
       
       
       // 多态
       class Cat extends Animal {
           static categories = ['mammal'];
       
           constructor(name) {
               super(name);
               console.log(this.name);
           }
       
           run() {
               return `Meow, ${ super.run()}`;
           }
       }
       
       const maomao = new Cat('maomao');
       console.log(maomao.run())

    ```
  
  
## TypeScript 中的类
- Public: 修饰的属性或方法是共有的

- Private： 修饰的属性或方法是私有的

- Protected： 修饰的属性或方法是受保护的  

```tsx
    // 2-9 class - 类 初次见面 (09：55)
    
    // js
    
    
    // 类
    class Animal {
        readonly name: string;
        constructor(name) {
            this.name = name;
        }
    
        protected run() {
            return `${this.name} is renning`;
        }
    }
    
    const snake = new Animal('lily');
    snake.name = '123'; // 这里不让修改
    console.log(snake.run()) // 这里不让调用
    
    // 继承
    class Dog extends Animal {
        bark() {
            return `${this.name} is renning`;
        }
    }
    
    const xiaobao = new Dog("xiaobabo")
    console.log(xiaobao.run());
    console.log(xiaobao.bark());
    
    
    // 多态
    class Cat extends Animal {
        static categories = ['mammal'];
    
        constructor(name) {
            super(name);
            console.log(this.name);
        }
    
        run() {
            return `Meow, ${ super.run()}`;
        }
    }
    
    const maomao = new Cat('maomao');
    console.log(maomao.run())

```
