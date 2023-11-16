import * as React from 'react';

interface CounterProps{
    title: string;

}

interface CounterState{
    num: number;
    hideCount: boolean;
}

//상속을 하기 위한 과정
class Counter extends React.Component<CounterProps, CounterState>{
    //오버라이딩 과정(반드시 생성자 명시)
    //생성자를 호출할 때는 부모가 먼저 만들어지고, 그 다음에 자식이 만들어지는 것
    constructor(props: CounterProps){
        super(props)
        //State와 props는 반드시 생성자로 주입을 받아야 한다.
        this.state = {num:10, hideCount: false}

        console.log("Mounting : In constructor");
        //props.title="test";
        /*props를 위와 같이 수정하려고 하면 에러가 난다.
        만약 수정을 하고 싶다면 부모객체(index.tsx)의 내용을 수정해야 한다.*/
    }

    //처음에는 가상돔에 10이라는 값이 들어가 있다가, plus 버튼을 누르면 20으로 변경이 되게끔 구성

    //setState => state update => render() => element
    //이게 reconciliation이다. 그런다음에 virtual dom에 적용이 된다. 그 다음에 real dom 그리고 그 다음에 화면에 노출된다.
    handleClick = () =>{
    //     //수정을 하려면 어떻게 해야 할까?
    //     console.log("Clicked with count: ", this.state.num);
    //     this.setState({num:20});
      this.setState((prev)=>{
            console.log(prev)
            //num이라는 변수에 10이 있다는 것을 알 수 있다.
            //함수이기 때문에 결과를 내기 위해서는 return으로 해준다
            return {num:prev.num+1,}
        }
      )
    }
    handleToggle = () =>{
        this.setState((prev)=>{
                return {hideCount:!prev.hideCount,}
            }
          )
        }
    componentDidMount(): void{
        console.log("Mounting : In componentDidMount")
    }

    componentDidUpdate(): void{
        console.log("Updating : In componentDidUpdate")
    }

    render(){
        console.log("Mounting & Updating: In render")
        return (<div>
                    <h1>{this.props.title}</h1>
                    <h3>Count: {this.state.num}</h3>
                    <button onClick={this.handleClick}>Plus</button>
                    <button onClick={this.handleToggle}>Toggle Count</button>
                </div>);
                //State는 해당 컴포넌트 내부에서만 반드시 쓸 수 있다!
    }
}

//외부로 노출시키기 위해서 export해준다!
export default Counter;