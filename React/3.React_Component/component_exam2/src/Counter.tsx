import * as React from 'react';
import CountDisplay from './CountDisplay';
import {useCounter} from "./hooks/useCounter"
import useToggle from './hooks/useToggle';

interface CounterProps{
    title: string;
}

interface CounterState{
    num: number;
    hideCount: boolean;
}

//함수는 절대 this를 사용할 수 없다(this는 객체에서만 사용 가능하다!)
//props에서 type은 any로 지정해준다!
//props를 전달받고 element를 출력
//props의 타입을 Counterprops로 지정하면 제목은 정할 수 있다!
function Counter(props:CounterProps): React.ReactElement{
    const {count, plus, Minus} = useCounter();
    const [hideCount, toggle] = useToggle();

    React.useEffect(()=>{console.log("[Rendered] Count / useEffect");});
    React.useEffect(()=>{console.log("[Mounted] Count / useEffect");}, []);

    return (
        <div>
            <h1>{props.title} / {window.innerWidth}</h1>
            {!hideCount && <CountDisplay count ={count}/>}
            <button onClick={plus}>Plus</button>
            <button onClick={Minus}>Minus</button>
            <button onClick={toggle}>Toggle Count</button>
        </div>
    );  
}


//외부로 노출시키기 위해서 export해준다!
export default Counter;