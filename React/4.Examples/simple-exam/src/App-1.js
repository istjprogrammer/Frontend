import React, {useState} from 'react';

// const App = () => {
/*
  const [count, setCount] = useState(0);
*/
//   return (
//     <div>
//       <h1>0</h1>
//       <button onClick={()=>setCount(count()=>count++)}>클릭</button>
//     </div>
//   );
// }

const App = () => {
  // 상태 변수 count와 이를 수정하는 함수 setCount를 생성
  // useState는 초깃값을 0으로 설정
  const [count, setCount] = useState(0);

  // 버튼을 클릭할 때 실행되는 함수입니다.
  const ButtonClick = () => {
    // setCount를 사용하여 count를 1 증가시킵니다.
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ButtonClick} onMouseOut={()=>{setCount(0)}}>클릭</button>
    </div>
  );
}

export default App;