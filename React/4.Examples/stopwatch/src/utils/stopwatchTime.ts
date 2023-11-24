import { SECOND_PER_HOUR, SECOND_PER_MINUTE } from "../constants";

const stopwatchTime = (seconds:number) => {
    const h = Math.floor(seconds/ SECOND_PER_HOUR);
    const m = Math.floor(seconds % SECOND_PER_HOUR / SECOND_PER_MINUTE);
    const s = seconds -h * SECOND_PER_HOUR -m * SECOND_PER_MINUTE;

    //시 분 초를 각각 2자리씩만 나오게끔(초깃값은 00:00:00으로 나타나게끔)
    return `${String(h).padStart(2,"0")} : 
            ${String(m).padStart(2,"0")} :
            ${s.toFixed(2).padStart(2,"0")}`;
}

export default stopwatchTime;