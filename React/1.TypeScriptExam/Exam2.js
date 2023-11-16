//Function//
//1. Function Statement
function add(a, b) {
    return a + b;
}
var result = add(1, 2);
//2. Function Expression(화살표 함수로 작성하는 방법)
var addExp = function (a, b) { return a + b; };
var addExp2 = function (a, b) { return a + b; };
var addExp3 = function (a, b) { return a + b; };
/*UNION & INTERSECTION*/
function printValue(value) {
    console.log(value);
}
//Union은 value로 여러개의 조건을 걸어놓고 그 중 하나만 맞으면 되게끔 설정해놓은 것이다.
printValue(1);
printValue("10");
printValue(["1", "10"]);
//위의 세가지가 모두 허용이 되는 것이 유니온 방식이다!
//intersection은 어떻게 되느냐?
var inter = {
    age: 26,
    height: 180,
    weight: 89,
    name: "guswo"
};
var num1 = 1;
var num2 = 2;
num1 = num2;
function printValue2(value) {
    console.log(value);
}
//이렇게 따로따로 묶는 것도 가능하다.
var mankind = {
    age: 26,
    height: 180,
    weight: 89,
    name: "guswo"
};
var mankind_data = {
    name: "이현재",
    weight: 80,
    height: 180,
    age: 26
};
