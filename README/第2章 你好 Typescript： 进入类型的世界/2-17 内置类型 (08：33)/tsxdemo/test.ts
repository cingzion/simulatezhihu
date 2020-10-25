// 2-17 内置类型 (08：33)


// global
const a: Array<number> = [1,2,3];
const date = new Date();
date.getTime();
const reg = /abc/;
reg.test('abc');


// build-in object
Math.pow(2, 2);




// DOM and BOM
let boyd = document.body;
let allLis = document.querySelectorAll('li');
// allLis.keys();

document.addEventListener('click', (e) => {
    e.preventDefault();
}, false)





// Utility Types
interface IPerson {
    name: string;
    age: number
}


let jean: IPerson = { name: 'jean', age: 18 };
type IPartial = Partial<IPerson>;
let jean2: IPartial = { name: 'jean' };

type IOmit = Omit<IPerson, 'name'>
let jean3: IOmit = {age: 20};

