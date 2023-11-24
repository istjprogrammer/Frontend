import * as React from "react";
import styled from "@emotion/styled";
import stopwatchTime from "./utils/stopwatchTime";

interface IProps { seconds:number; }

const Time:React.FC<IProps> = ({seconds}) => {
    return <Container>{stopwatchTime(seconds)}</Container>
};

const Container = styled.div`
    color: white;
    font-size: 50px;
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Time;