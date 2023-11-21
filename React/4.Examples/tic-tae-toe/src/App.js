import React, { useState } from 'react'
import './App.css';
import Board from './components/Board';

// 클래스 컴퍼넌트 생성
// import * as React from 'react' 사용하면 React.Component 상속 이런 식으로
// import { Component } from 'react' 이렇게 사용하면 extends Component로, (위에가 더 넓은 범위 React의 Component)

const App = () => {
    // 사용법 : [상태값, 상태변경함수] = useState(초기값)
    const [history, setHistory] = useState([{squares:Array(9).fill(null)}])
    const [xIsNext, setxIsNext] = useState(true)
    const [stepNumber, setStepNumber] = useState(0)

    // 함수 정의
    const calcWinner = (squares) => {
      // 비교할 수 있는 배열, 경우의 수
      const lines = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0 ,4, 8], [2, 4, 6]
      ]

      // 비교하기
      for(let index=0; index<lines.length; index++) {
          // 반복 돌면서 abc에 값이 꺼내와짐
          const [a, b, c] = lines[index]
          if(squares[a] && squares[a] === squares[b] &&
              squares[a] === squares[c]) {
                  return squares[a]
              }
      }
      return null
  }
  // 함수를 호출하고 squares을 함수에 전달하고 있는 것을 winner에 담고 있다.
  const current = history[stepNumber];
  const winner = calcWinner(current.squares);

  let status
  if (winner) {
      status = 'Winner :' + winner
  }
  else {
      status = `Next Player : ${xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i) => {
    // 복사본 만들기
    const newHistory = history.slice(0, stepNumber + 1)
    const newCurrent = newHistory[newHistory.length -1]
    const newSquares = newCurrent.squares.slice()

    // 승부가 나면 클릭 막기
    if(calcWinner(newSquares) || newSquares[i]) {
        return
    }

    // xIsNext가 참이면 X 아니면 O 출력
    newSquares[i] = xIsNext ? 'X' : 'O';
    setxIsNext(!xIsNext);
    setHistory([...newHistory, {squares:newSquares}]);
    setStepNumber(newHistory.length);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext((step%2 === 0))
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move # " + move : "Go to start";
    return (
      <li key ={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  })

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
        </div>
        <div className="game-info">
          <div className='status'>{status}</div>
          <ol style={{listStyle:'none'}}>{moves}</ol>
        </div>
      </div>
    )
}

export default App;