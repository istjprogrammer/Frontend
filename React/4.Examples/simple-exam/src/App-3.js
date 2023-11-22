import React, { useState } from 'react'

const App = () => {
  const [regions, setRegions] = useState([{kor:"서울",eng:'seoul'},
                                          {kor:"부산",eng:'busan'},
                                          {kor:"제주",eng:'jeju'}])

  const [select, setSelect] = useState('')

  // onChange : 어떤 선택이 달라졌을 때
  const changeHandler = (e) => {
    // 선택된 값이 이벤트에 의해서 select에 값을 저장?
    setSelect(e.target.value)
  }
  return (
    // regions에서 region으로 데이터를 하나씩 넘겨주는 것
    <div>
      <h1>라디오 버튼의 value를 출력</h1>
      <select onChange={changeHandler}>
        {
          regions.map(region => (
            <option key={region.eng} value={region.eng}>{region.kor}</option>
          ))
        }
      </select>
      <button onClick={()=>alert(select)}>확인</button>
    </div>
  )
}

export default App