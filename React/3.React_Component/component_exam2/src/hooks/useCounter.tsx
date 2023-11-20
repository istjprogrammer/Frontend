import * as React from 'react';

interface useCounterReturnType {
    count: number;
    plus: ()=> void;
    Minus: ()=> void;
    countLog: ()=> void;
    memoizedNumber: number;
}

export function useCounter() : useCounterReturnType{
    const [count, setCount] = React.useState(0);

    const plus = React.useCallback(() => setCount((prev)=>prev + 1), []);
    const Minus = React.useCallback(() => setCount((prev)=>prev - 1), []);
    const countLog = React.useCallback(() => console.log(count), []);
    //console.log(count) ,[count] 의존성을 추가해줌으로서 실시간 값이 콘솔창에 출력됨
    
    const memoizedNumber = React.useMemo(() =>{
        let result = count;
        console.log("Calc Start");
        for(let i = 0; i<10000; i++){
            console.log("result:", result);
            result +=i;
        }
        console.log("Calc End");
        return result;
    }, [count]);

    return {count, plus, Minus, countLog, memoizedNumber};
}