import * as React from 'react';

interface CountDisplayProps{
    count: number;
}

interface CountDisplayState{}

class CountDisplay extends React.Component<CountDisplayProps,
                                             CountDisplayState>{
    constructor(props:CountDisplayProps){
        super(props);
    }

    componentDidUpdate():void {
        console.log("[Updating] CountDisplay / componentDidUpdate");
    }

    componentDidMount(): void {
        console.log("[Mounting] CountDisplay / componentDidMount");
    }

    componentWillUnmount(): void {
        console.log("[Unmounting] CountDisplay / componentWillUnmount");
    }


    render(){
        return <h3>Count: {this.props.count}</h3>
    }
}

//export시켜놔서 다른 파일에서도 사용 가능
export default CountDisplay;