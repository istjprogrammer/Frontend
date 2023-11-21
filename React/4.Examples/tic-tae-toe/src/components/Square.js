import React, { useState } from 'react';
import "./Square.css"
// rcc react 클라이언트 컴퍼넌트 약자

/*
//클래스형 컴포넌트
export default class Square extends Component {
  // 생성자를 준비해 status를 만들기
  constructor(props) {
    // super : 부모 호출
    super(props)

    // 현재 state값 준비
    this.state = {value:null}
  }

  render() {
    return (
      // square에 번호 부여하기 (value)
      // 화살표 함수를 이용해 핸들러 지정
      <button className='square'
        // 기존의 state를 변경 : setState()
        onClick={()=>{this.props.onClick()}}>
          {this.props.value}
      </button>
    )
  }
}
*/

//함수형 컴포넌트
const Square = (props) => {
    //const [value, setValue] = useState(null);
  
    return (
      <button className='square' onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  };
  
  export default Square;

  //함수형 컴포넌트로 코드를 짜면 훨씬 코드가 간결해진다.
  //함수형으로 코드를 짜려면 Hook가 필요하다.