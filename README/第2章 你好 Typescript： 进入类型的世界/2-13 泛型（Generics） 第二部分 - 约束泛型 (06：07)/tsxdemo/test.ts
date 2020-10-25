// 2-13 泛型（Generics） 第二部分 - 约束泛型 (06：07)

function echo<T>(arg: T): T {
    return arg;
}


const resulta = echo(true);


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const resultb = swap(['string', 123]);


// 这不是最完美的
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const arrs = echoWithArr([1,2,3]);

// 新的解决方案
interface IWithLength {
    length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3]);

// echoWithLength(12);

