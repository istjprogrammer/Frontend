/*
//usestate사용
import React, { useState } from 'react'

const App = () => {

  const [sum, setSum] = useState(0);
  
  const bugger = () => {
    setSum(sum + 4000);
  }

  const gamza = () =>{
    setSum(sum + 2000);
  }

  const drink = () =>{
    setSum(sum + 1000);
  }

  return (
    <div>
      <h1>햄버거 주문 키오스크</h1>
      <h3>지불할 금액 : {sum} </h3>
      <hr/>
      <button onClick={bugger}>햄버거(4000원)</button>
      <button onClick={gamza}>감자튀김(2000원)</button>
      <button onClick={drink}>음료(1000원)</button>
    </div>
  )
}

export default App
*/

//useReducer를 사용해보기

import React, { useReducer } from 'react';

const priceReducer = (price, action) => {
  switch(action.type) {
    case 'bugger' : 
      return price+4000;
    case 'potato' :
      return price+3000;
    case 'drink' :
      return price+2000;
    default:
      return price;
  }
}

const App = () => {
  const [price, priceDispatcher] = useReducer(priceReducer, 0);

  const clickBugger = () => {
    priceDispatcher({type:'bugger'})
  }

  const clickPotato = () => {
    priceDispatcher({type:'potato'})
  }

  const clickDrink = () => {
    priceDispatcher({type:'drink'})
  }

  return (
    <div>
      <h1>햄버거 주문 키오스크</h1>
      <h3>지불할 금액: {price} </h3>
      <hr />
      <button onClick={clickBugger}>햄버거(4000원)</button>
      <button onClick={clickPotato}>감자튀김(3000원)</button>
      <button onClick={clickDrink}>음료(2000원)</button>
    </div>
  );
};

export default App;