import * as React from "react";
import styled from "@emotion/styled"
import { Lap } from "./hooks/useStopwatch";

interface IProps{
    laps:Lap[];
    nextLap: Lap;
}

const Laps:React.FC<IProps> = ({laps, nextLap}) => {
    return (
        <Container>
            <Box>{nextLap.title} with {nextLap.seconds}</Box>
            {
                laps.map((lap)=>{
                    return<Box>{lap.title} with {lap.seconds}</Box>
                })
            }
        </Container>
    )
}

const Container = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    overflow: auto;
`;

const Box = styled.div`
    display: flex;
    color: white;
    font-size:20px;
    padding: 20px;
    align-items: center;
    justify-content : space-between;
`;

export default Laps;