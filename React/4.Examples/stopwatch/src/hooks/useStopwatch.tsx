import * as React from "react";
import {INTERVAL, MILLISEC_PER_SECOND} from "../constants"

export enum STATUS {
    PROCESSING,
    STOP
}

export interface Lap {
    id: number;
    title: string;
    seconds: number;
}

interface UseStopwatchReturnType {
    status: STATUS;
    seconds: number;
    laps: Lap[];
    nextLap: Lap;

    start: ()=>void;
    stop: ()=>void;
    reset: ()=>void;
    record: ()=>void;
}

const useStopwatch: ()=> UseStopwatchReturnType = () =>{
    const [seconds, setSeconds] = React.useState(0);
    const [status, setStatus] = React.useState(STATUS.PROCESSING);
    const [laps, setLaps] = React.useState<Lap[]>([]);
    const nextLap = React.useMemo<Lap>(()=>{
        return {
            id:laps.length+1,
            title:`랩 ${laps.length+1}`,
            seconds:seconds
        }
    },[seconds, laps]);

    const start = React.useCallback(()=>{
        if(status !== STATUS.STOP){
            return;
        }
        setStatus(STATUS.PROCESSING);
    }, [status]);

    const stop = React.useCallback(()=>{
        if(status !== STATUS.PROCESSING){
            return;
        }
        setStatus(STATUS.STOP);
    }, [status]);

    const reset = React.useCallback(()=>{
        setSeconds(0);
        setLaps([])
    }, []);

    const record = React.useCallback(()=>{
        setLaps((prev) => [nextLap, ...prev])
    }, [status, nextLap]);

    React.useEffect(()=>{
        let intervalId:number;

        if(status === STATUS.PROCESSING){
           intervalId = window.setInterval(()=>{
                setSeconds((prev)=>{return prev + INTERVAL/MILLISEC_PER_SECOND})
            }, INTERVAL);
        }
        return () => {
            window.clearInterval(intervalId)
        }
    },[status]);
    
    return{seconds, status, laps, nextLap, start, stop, reset, record};
};
export default useStopwatch;