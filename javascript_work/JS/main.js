/*import number, {hello, str as name, func} from './module.js'
//모듈에 있는 hello를 가져온다는 뜻
//한쪽에서는 export를 해주고 다른 한 쪽에서는 import를 해주면 된다.

const parent = document.querySelector(".parent")
console.log(parent.innerHTML)
console.log(hello)
console.log(number)
console.log(name)//console.log(str)
// console.log(arr)
console.log(func)*/

// import * as mod from './module.js'

// console.log(mod.default)
// console.log(mod.hello)
// console.log(mod.str)
// console.log(mod.arr)
// console.log(mod.func)

// import {A} from './A.js'
// import {B} from './B.js'

import {A, B} from './util.js'

console.log(A())
console.log(B())