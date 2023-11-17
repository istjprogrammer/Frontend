import * as React from 'react';

interface CountDisplayProps{
    count: number;
}

function CountDisplay(props:CountDisplayProps) : React.ReactElement{
    React.useEffect(()=>{
        console.log("[Rendered] CountDisplay / useEffect")
    });
    //의존성을 딱 한번만 주려면?
    //의존성으로 통해서 라이프사이클을 조절 ㅐ능
    React.useEffect(()=>{
        console.log("[Mounted] CountDisplay / useEffect")
    }, []);
    return <h3>Count: {props.count}</h3>
    
}

//export시켜놔서 다른 파일에서도 사용 가능
export default CountDisplay;