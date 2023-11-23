import * as React from "react";
import { Lap } from "./hooks/useStopwatch";

interface IProps{
    laps:Lap[];
}

const Laps:React.FC<IProps> = ({laps}) => {
    return (
        <div>
            {
                laps.map((lap)=>{
                    return<div>{lap.title} with {lap.seconds}</div>
                })
            }
        </div>
    )
}

export default Laps;