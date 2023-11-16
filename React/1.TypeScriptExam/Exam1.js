///// number, string, boolean /////
var num = 100;
//이렇게 num을 찍고 콜론에 원하는 자료형을 찍어버리면 반드시 해당되는 값만 들어가야 한다.//
/*만약에 TS 파일을 실행시키고 싶을 때는 TSC 명령어를 실행하면 된다.
프로그램 관리시 npm, 프로그램 실행시 npx
아무런 에러가 없다면 자바스크립트 파일로 생성이 됩니다.*/
var str = '10';
var bool = true;
//------------------//
/*array, object, enum*/
var numArr = [1, 2];
var boolArr = [true, true, false];
/*서로 다른 형태를 묶어주는게 object 형태이다.*/
var man = {
    name: "순자",
    age: 85,
    married: true
};
var GRADE;
(function (GRADE) {
    GRADE[GRADE["A"] = 0] = "A";
    GRADE[GRADE["B"] = 1] = "B";
    GRADE[GRADE["C"] = 2] = "C";
    GRADE[GRADE["D"] = 3] = "D";
    GRADE[GRADE["E"] = 4] = "E";
    GRADE[GRADE["F"] = 5] = "F";
})(GRADE || (GRADE = {}));
var myGrade = GRADE.A;
// any, unknown //
var anyValue = 1;
//const로 되어있으면 상수라서 한번 값이 정해지면 바꿀 수 없다.
anyValue = "1";
anyValue = true;
var unknownValue = 1;
unknownValue = "3";
unknownValue = false;
anyValue.hell();
/*void, never*/
function hellovoid() {
    console.log("hello");
}
//void로 선언했을 때는 return이 절대 있으면 안된다.
function helloString() {
    console.log("Hello");
    return "hello";
}
function helloNever() {
    console.log("Hello");
    while (true) {
        throw 'Error';
    }
}
/*null, undefined*/
var nullValue = undefined;
var undefinedValue = null;
