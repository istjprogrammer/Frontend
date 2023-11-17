import * as React from 'react';

interface useCounterReturnType {
    count: number;
    plus: ()=> void;
    Minus: ()=> void;
}

export function useCounter() : useCounterReturnType{
    const [count, setCount] = React.useState(0);

    const plus = () => setCount((prev)=>prev + 1);
    const Minus = () => setCount((prev)=>prev - 1);

    return {count, plus, Minus};
}