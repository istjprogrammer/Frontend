//Function//

//1. Function Statement
function add (a:number, b:number): number {
    return a+b
}

const result:number = add(1, 2)

//2. Function Expression(화살표 함수로 작성하는 방법)
const addExp = (a:number, b:number):number => a + b;

const addExp2 :(a:number, b:number) => number = (a,b) => a+b;

const addExp3 :(a:number, b:number) => number = 
    function(a:number, b:number):number {return a + b}

/*UNION & INTERSECTION*/
function printValue(value:number | string | string[]): void{
    console.log(value)
}
//Union은 value로 여러개의 조건을 걸어놓고 그 중 하나만 맞으면 되게끔 설정해놓은 것이다.

printValue(1)
printValue("10")
printValue(["1", "10"])

//위의 세가지가 모두 허용이 되는 것이 유니온 방식이다!

//intersection은 어떻게 되느냐?
const inter : {name:string, age:number} & 
    {height:number, weight:number} = {
        age:26,
        height:180,
        weight:89,
        name:"guswo"
    }

//------------------------------
/* Type Alias & Interface */
type NUM = number

let num1:number = 1;
let num2:NUM = 2;
num1 = num2;

type unionType = number | string | string[];
function printValue2(value:unionType):void {
    console.log(value)
}

// type MANKIND = {
    // name: string;
    // age: number;
    // height: number;
    // weight: number
// }

type MANKIND = 
    {name: string;
    age: number} &
    {height: number;
    weight: number}
//이렇게 따로따로 묶는 것도 가능하다.

const mankind :MANKIND = { 
    age:26,
    height:180,
    weight:89,
    name:"guswo"}
//이렇게 넣어주는 것도 가능하다!

//2. Interface
interface IMANKIND {
    name: string;
    age: number;
    height: number;
    weight: number;
}

const mankind_data:IMANKIND = {
    name: "이현재",
    weight: 80,
    height: 180,
    age: 26
}