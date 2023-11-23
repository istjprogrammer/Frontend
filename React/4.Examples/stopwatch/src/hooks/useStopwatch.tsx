import * as React from "react";

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

    start: ()=>void;
    stop: ()=>void;
    reset: ()=>void;
    record: ()=>void;
}

const useStopwatch: ()=> UseStopwatchReturnType = () =>{
    return;
};