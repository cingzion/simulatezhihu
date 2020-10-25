// 2-8 类型推论 联合类型和 类型断言 (07：43)

// type interface
let str = 'str';




// union types
let numberOrString: number | string;
numberOrString = 'abc';
numberOrString = 123;
numberOrString.toString();


// 类型断言
function getLength(input: string | number): number {
    const str = input as string; // 类型断言 就是把 input 类型 变成 string 类型

    if(str.length) {
        return str.length;
    } else {
        const number = input as number;
        return number.toString().length;
    }
}

// type guard

function getLength2(input: string | number): number {
   if(typeof input === 'string') {
       return input.length;
   } else {
       return input.toString().length;
   }
}
