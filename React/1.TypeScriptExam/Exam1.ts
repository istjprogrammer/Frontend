///// number, string, boolean /////
const num: number = 100;
//이렇게 num을 찍고 콜론에 원하는 자료형을 찍어버리면 반드시 해당되는 값만 들어가야 한다.//
/*만약에 TS 파일을 실행시키고 싶을 때는 TSC 명령어를 실행하면 된다.
프로그램 관리시 npm, 프로그램 실행시 npx
아무런 에러가 없다면 자바스크립트 파일로 생성이 됩니다.*/
const str: string = '10';
const bool: boolean = true;

//------------------//
/*array, object, enum*/
const numArr:number[] = [1,2];
const boolArr: boolean[] = [true, true, false];

/*서로 다른 형태를 묶어주는게 object 형태이다.*/
const man: {name:string, age:number, married:boolean}=
{
    name:"순자",
    age:85,
    married:true
};
enum GRADE {A, B, C, D, E, F}
const myGrade:GRADE = GRADE.A;

// any, unknown //
let anyValue: any = 1;
//const로 되어있으면 상수라서 한번 값이 정해지면 바꿀 수 없다.
anyValue = "1";
anyValue = true;

let unknownValue: unknown = 1;
unknownValue = "3";
unknownValue = false;

anyValue.hell();

/*void, never*/

function hellovoid(): void{
    console.log("hello");
}
//void로 선언했을 때는 return이 절대 있으면 안된다.

function helloString(): string{
    console.log("Hello")
    return "hello"
}

function helloNever(): never{
    console.log("Hello")
    while(true){
        throw 'Error';
    }
}

/*null, undefined*/
const nullValue: null = undefined;
const undefinedValue: undefined = null;
