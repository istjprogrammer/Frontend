import React, { useReducer, useState } from 'react';
/*
const moneyReducer = (money, action) => {
  switch(action.type){
    case 'Deposit' :
      return money+won;
    case 'Withdraw' :
      return money-won;
    default:
      return money
  }
}
const App = () => {

  const [money, moneyDispatcher] = useReducer(moneyReducer, 0);

  const clickDeposit = () => {
    moneyDispatcher({type:'Deposit'})
  }

  const clickWithdraw = () => {
    moneyDispatcher({type: 'Withdraw'})
  }

  return (
    <div>
      <h1>금액을 입력하세요</h1>
      <input type="number" value={won} step={1000}/>
      <hr/>
      <h2>입금 또는 출금 버튼을 클릭하세요</h2>
      <button onClick={clickDeposit}>입금(Deposit)</button>
      <button onClick={clickWithdraw}>출금(Withdraw)</button>
      <h2>현재 잔액 : {money} </h2>
    </div>
  );
};
*/

const accountReducer = (state, action) => {
  switch(action.type){
    case "Deposit":
      return state + Number(action.money);
    case "Withdraw":
      return state - Number(action.money);
    default:
      return state;
  }
}
const App = () => {
const [state, dispatch] = useReducer(accountReducer, 0);
const [money, setMoney] = useState(0);

const clickDeposit = () => {
  dispatch({type:"Deposit", money:money})
}
const clickWithdraw = () => {
  dispatch({type:"Withdraw", money:money})
}



return (
  <div>
    <h1>금액을 입력하세요</h1>
    <input type="number" step={1000} onChange={(e)=>setMoney(e.target.value)}/>
    <hr/>
    <h2>입금 또는 출금 버튼을 클릭하세요</h2>
    <button onClick={clickDeposit}>입금(Deposit)</button>
    <button onClick={clickWithdraw}>출금(Withdraw)</button>
    <h2>현재 잔액 : {state}</h2>
  </div>
);
};

export default App