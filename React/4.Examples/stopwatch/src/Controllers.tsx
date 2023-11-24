import * as React from "react";
import Time from "./Time";
import { STATUS } from "./hooks/useStopwatch";
import Laps from "./Laps";
import styled from "@emotion/styled"
import Button from './Button'

interface IProps {
    state:STATUS;
    record:() => void;
    stop: () => void;
    reset: () => void;
    start: () => void;
}

const Controllers:React.FC<IProps> = ({state, record, start, stop, reset}) => {
    return(
        <Container>
            {state === STATUS.PROCESSING ?
            <>
                <Button type="NORMAL" onClick={record}>랩</Button>
                <Button type="ERROR" onClick={stop}>정지</Button>
            </>
            :
            <>
                <Button type="NORMAL" onClick={reset}>초기화</Button>
                <Button type="SUCCESS" onClick={start}>시작</Button>
            </>
            }; 
        </Container>
    )
};

const Container = styled.div`
    flex: none;

    display: flex;
    padding: 30px;
    justify-content: space-between'
    align-items: center;

    border-bottom: 1px solid #fff;
`;
export default Controllers;