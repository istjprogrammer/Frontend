import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 저장하기 위해서 usestate 사용
  const [message, setMessage] = useState('내용없음'); // 메세지 상태를 저장하기 위해서 usestate 사용

  // 텍스트가 입력될 때 변화되는 상태
  const textChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    // 입력된 내용에 따라 메세지 상태 업데이트
    setMessage(newText.length === 0 ? '내용없음' : newText);
  };

  // 버튼 클릭 시 팝업에 메세지 띄우기
  const buttonClick = () => {
    alert(message);
  };

  // 엔터를 눌러도 클릭과 동일한 효과 내기
  const enterKey = (e) => {
    // 엔터 키를 눌렀을 때 버튼 클릭과 동일한 동작 수행
    if (e.key === 'Enter') {
      buttonClick();
    }
  };

  return (
    <div>
      <h1 style={{ color: message.length === 0 ? 'red' : 'black' }}>{message}</h1>
      <hr />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        // input 태그의 초기값
        value={inputText}
        onChange={textChange}
        // 엔터키를 눌렀을 때 클릭과 동일한 효과 내기
        onKeyPress={enterKey}
      />
      <button onClick={buttonClick}>클릭</button>
    </div>
  );
};

export default App;
