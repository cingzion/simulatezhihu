let arrOfNumbers: number[] = [1,2,3];
arrOfNumbers.push(3);

// 类数组
function test() {
    console.log(arguments);

    // 以下都是天生就有的。
    // let arr: IArguments = arguments;
    // let htmlCollection: HTMLAllCollection = arguments
}


// 元组类型
let user: [string, number] = ['jean', 20];
user.push(15);
user.push("cing")
