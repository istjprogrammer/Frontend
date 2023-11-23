import * as React from "react";
interface IProps { seconds:number; }

const Time:React.FC<IProps> = ({seconds}) => {
    return <div>{seconds}</div>
};

export default Time;