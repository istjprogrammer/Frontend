# 1. 리엑트란?<br>
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리다.<br>
(프레임 워크가 아닌 라이브러리다.)<br>

-아직까지는 뷰보다 리엑트를 더 많이 쓴다.(BE에 스프링이 있다면, FE에는 리엑트가 있다.)<br>
Virtual DOM<br>
Component<br>
이 두가지가 리엑트의 가장 핵심적인 개념이다.

리엑트는 왜 이름이 리엑트일까?<br>
리엑트가 무엇인지 감이 잘 안 오면, Ajax를 떠올리면 된다.

- component : 리엑트로 만들어진 앱을 이루는 최소한의 단위(마치 하나의 레고 조각같은 느낌)<br>
클래스형 컴포넌트와 함수형 컴포넌트 중에 뭐로 만들어야 할지를 알아야 한다.<br>
- 클래스형 컴포넌트 :  
- 함수형 컴포넌트 : 

# 2. 리엑트 프로젝트 만드는 방법

## (1) 손수 작성하는 방법(손코딩-매운맛)
- babel
- webpack
- 그 외 툴을 모두 직접 설치

## (2) CRA (Create React App)을 이용하는 방법

## (3) Online Code Tool을 이용하는 방법
코드 샌드박스를 사용하면 가장 쉽게 할 수 있다.

우리는 첫번째 방법(제일 매운 방법)을 할 것이다.<br>
그리고 매운맛 코딩을 하기 전에 타입스크립트를 배우고 갈 것이다.

# 3. TypeScript
## (1) 특징
    -JS Static TypeChecker
    이것이 가장 큰 특징이다.
    컴파일 할 때 타입 체크가 가능하다는게 타입스크립트의 가장 큰 장점이다.

    -자바스크립트의 Superset
    자바스크립트의 기본 문법을 다 포함한 상태에서 몇가지 추가만 된 느낌이다.

    -마이크로소프트에서 만든 오픈소스
    마이크로소프트는 정말 돈을 좋아하는 회사인데, 오픈소스를 만든 이유는 이게 더 큰 돈이 되기 때문이다.
    MS에서 만든 이유 하나로 충분히 인정받을만 하다.

## (2)실행 가능여부
    그러나 웹 브라우저에서는 아직까지는 HTML, CSS, JS만 실행이 되고 TS는 실행이 되지 않는다.

## (3) 실습 준비
### 1. 프로젝트 만들기
1-1 : npm init (초기화 명령어)<br>
1-2 : npm i -D typescript(개발할때만 필요하다는 값)<br>
### 2. 코드 작성 및 실행
2-1 : 코드는 확장자가 TS라는 확장자로 저장하면 된다.<br>
2-2 : 실행할 때는 TSC라는 명령어로 컴파일하면 된다.<br>
(마치 javac가 java로 컴파일 하라는 명령어인 것처럼)<br>

## (4) 기본 타입들
- number
- string
- boolean
- array
- object
- enum
- any
- unknown
- void
- never
- null
- undefined

## (5) 실습
### 문법<br>
const num:number = 100;<br> 
만약 자바스크립트였다면? const num = 100 이렇게 하고, 아무 값이나 다 들어가도 되었을 것<br>
변수에 콜론찍고, 타입을 지정하는 것이 JS와 큰 차이점<br>

- 프로그램을 관리할 때는 npm ~으로 실행하고
- 프로그램을 실행할 때는 npx ~으로 실행한다.
- ts파일을 컴파일하고 싶을때는
npx tsc 파일명을 터미널에 입력하면 된다.

- 그러면 파일명과 동일한 자바스크립트 파일이 생성된다.(문법적 오류가 없다면)<br>

-any와 unknownValue중 뭐가 더 나을까?<br>
unknownValue가 훨씬 낫다!<br>
왜냐하면 unknown으로 타입형을 지정하면 적어도 말도안되는 타입 변환은 막아주기 때문이다.

-function에서 return을 하려고 하면, 리턴하는 타입을 적어줘야 한다.
Never는 결코 돌아가지 못하게 하는 명령어다.<br>
무한반복을 돌릴 때 Never를 써주면 유용하다!

## (4) Function(Exam2.ts, 1번_line3~16)
- Parameter type
- Return type

## (5) Union & Intersection
- union(Exam2.ts, line18~28)
    + 여러 타입들 중 하나
    + OR(|) 연산자
- intersection(Exam2.ts, line30~37)
    + 여러 타입들을 하나로 결합
    + And(&) 연산자

## (6) Type Alias & Interface
Type Alias(Exam2.ts, line40~)<br>
타입에 대한 정의를 저장하여 재사용성을 높이는 타입 정의

- Type Alias란?<br>
내가 원하는 대로 타입을 정의하는 것

- Interface란?<br>
클래스가 안정적으로 오류 없이 만들어질 수 있도록 제작하기 위해 쓰는 것<br>
내가 지정한대로 타입을 지정하지 않으면 오류가 난다.<br><br>

# 4. 리엑트 메뉴얼 설치
## (1) Eslint & Prettier : Linter & Formatter
- 자바스크립트 코드 작성시 놓치는 부분을 잡아주는 툴<br>
주로 코드 컨벤션, 문법적 오류, 포매팅 등을 도와준다.

## (2) TypeScript : Static Typechecker

## (3) Babel : Transpiler
- 최신 문법의 JS를 특정 버전의 JS로 변환시켜주는 툴
- 현재 작성된 코드가 다양한 환경에서 호환될 수 있도록 도와주는 기능
- 특히 React에서는 JSX라는 문법이 있는데, 그 문법을 자바스크립트로 변환해주는 역할을 한다.

## (4) Webpack : bundler
- 뷰에서 가장 기본으로 썼던 기능
- 방대해진 JS 프로젝트 코드를 최적의 조건으로 전달할 수 있도록 프로젝트 코드를 모아서 적절한 기준으로 나눠 파일에 담는 역할(뷰의 번들러와 유사)

# 5. Online Code Tool 이용
-  https://codesendbox.io

# 6. Virtual DOM, ReactElement, JSX, ReactComponent

## (1) Virtual DOM
마크업 랭귀지에 있는 테그들을 트리모양으로 구성해서, 사용자에게 보여지게끔 하는 것이다.
- 화면에는 렌더링 되지 않고 메모리에만 존재하는 DOM
- DOM 변경사항 => Virtual DOM => Real DOM

## (2) ReactElement
자기가 표현하고 싶은 무언가를 담고있는 내용
- React.createElement(type, [props], [...child])<br>
이것으로 리엑트 엘리먼트를 만든다.

## (3) JSX
- JavaScript + XML : Action + View
- 코드를 줄이고, View를 직관적으로 상상할 수 있게 도움을 준다.
- JSX 사용시 주의사항 : Babel을 통해서 JSX로 만든 문법을 JS로 변환하기 위한 과정이 필요하다.(Transpiling)<br>
- 시작과 끝 테그가 반드시 한 쌍으로 묶여야 한다.
- 반드시 하나의 요소로 표현해야 한다.
- 중괄호를 이용하여 JS표현식을 사용할 수 있다.

## (4) ReactComponent
- input으로 props를 받고, output으로 Element를 내보내주는 것
- Component 작성방식(중요!)<br>
Class Component : 생성자로 props를 받고 render를 통해서 Element를 내보낸다.<br> 
Function Component : 매개변수로 (props)생성자를 받고 return 값으로 Element를 내보낸다.<br>
- Class와 Function의 차이는?<br>
컴포넌트가 복잡하고 규모가 크면 Class로 하고, 단순하면 Function으로 한다.<br>
내가 만들고자 하는 컴포넌트의 규모를 생각해서 class로 할지, function으로 할지 결정하면 된다.

- Component의 핵심 기능<br>
재사용이 가능해야 한다.<br>
그러나 이렇게 하다보면, 의존성이 생긴다.<br>

- 객체지향 언어 : Class로 이뤄진 언어<br>
계속 오랫동안 쓰다 보니, 단점들이 눈에 띄게 된다.<br>
그래서 복잡성을 줄이기 위해서 나온 것이다.<br>

- 함수형 언어 : 객체지향언어의 불편함을 줄이기 위해서 함수형 언어가 다시 쓰이기 시작했다.(C언어, Fortran과는 다른 최신 언어 ex : python)

- Component에서 해야할 일 : class로 만들어진 것을 function으로 고쳐보기!

- Component 설계방식<br>
Higher Order Component Pattern<br>
Compound Component Pattert<br>
Provider Pattern<br>
Hook Pattern<br>
Atomic Design Pattern

# 7. Component 활용
## (1) Props & State
리엑트로 동적페이지를 만들고 싶다면 Virtual DOM을 업데이트 할 줄 알면 된다.<br>
그 방법은 바로 Props & State를 변경하는 것이다.

### 1) Props
- 외부에서 주입되는 데이터로 부모 컴포넌트에서 자식 컴포넌트로 전달이 된다.
- 순수 JS객체로 컴퍼넌트 안에서 수정되어서는 안된다.
- 자식은 값을 스스로 수정할 수 없다.(자기 것이 아니기 때문에)
- 업데이트 방법 : 부모에서 다른 속성값을 주는 경우

### 2) State
- 컴포넌트에서 생성되고, 내부에서만 사용 가능한 값(밖으로 전달 불가능, 무조건 안에서만 소비해야 한다.)
- 순수 자바스크립트 객체로 따로 번역할 필요가 없다.
- 내가 만든 것이기에, 스스로 수정이 가능하다.
- 업데이트 방법 : setState() 사용(setter 함수)

### 3) 업데이트 과정
- Diffing 알고리즘 : 리엑트에서는 New Element와 Old Element의 비교를 통해서 Virtual DOM을 변경하는 작업(Reconciliation : 재조정)
- Diffing 알고리즘의 특징<br>
-Type이 다르면 이전 트리를 버리고 새로운 트리를 적용한다. 이 과정에서 자식 엘리먼트들도 모두 제거된다.<br>
-같은 타입의 DOM Element일 경우, 속성이 다른 내용에 대해서만 새롭게 수정한다.<br>
자식은 재귀적으로 Diffing Algorithm을 따른다.<br>
-같은 타입의 Component Element인 경우에는 State는 유지되고 Props는 새로 만들어진 후 render를 호출해 비교한다.<br>
-여러개의 동일한 엘리먼트가 같은 깊이에 존재한다면, key 속성을 통해서 업데이트의 대상을 추려낼 수 있다.

## (2) Life Cycle
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/<br>
위의 링크를 참고해보면 굉장히 자세하게 설명이 나와있다.<br>

### 1) Mounting
constructor => render => Update Real Dom => componentDidMount

### 2) Updating
render => Update Real Dom => componentDidUpdate

### 3) Unmounting
componentWillUnmount 

### 4) Process
props => component => render() => Element => 비교 알고리즘 => Virtual DOM => Real DOM