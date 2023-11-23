import * as React from "react";
import Time from "./Time";
import { STATUS } from "./hooks/useStopwatch";

interface IProps {
    state:STATUS;
    record:() => void;
    stop: () => void;
    reset: () => void;
    start: () => void;
}

const Controllers:React.FC<IProps> = ({state, record, start, stop, reset}) => {
    return(
        <div>
            {state === STATUS.PROCESSING ?
            <>
                <button>랩</button>
                <button>정지</button>
            </>
            :
            <>
                <button>초기화</button>
                <button>시작</button>
            </>
            }; 
        </div>
    )
};

export default Controllers;