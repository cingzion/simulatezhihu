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
