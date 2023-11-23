import * as React from "react";
import Controllers from "./Controllers";
import Time from "./Time";
import Laps from "./Laps";

const StopWatch:React.FC = () => {
    return(
        <div>
            <Time seconds={100}/>
            <Controllers state={"Processing"} record={()=>{}}
                start={()=>{}} stop={()=>{}} reset={()=>{}}/>
            <Laps laps={['l', 'a', 'p', 's']}/>
        </div>
    )
};

export default StopWatch;