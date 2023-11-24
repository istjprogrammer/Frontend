import * as React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import { isPropertySignature } from "typescript";

//버튼 타입 선언
type ButtonType = "NORMAL" | "SUCCESS" | "ERROR";

//앞의 함수들을 불러오는 집합(인터페이스)
interface IProps{
    type: ButtonType;
    onClick: () => void;
    children: React.ReactNode;
}

const Button:React.FC<IProps> = ({type, onClick, children}) => {
    return <Container type={type} onClick={onClick}>{children}</Container>
}
//내가 원하는 함수만 골라쓰기
type styleProps = Omit<IProps, "onClick" | "children">
const getStyledByType = (props:styleProps) => {
    let color = "white";
    let background = "#333333";

    switch(props.type){
        case "NORMAL":
            color="black";
            background = "white"
            break;
        case "SUCCESS":            
            color="white";
            background = "#00f"
            break;
        case "ERROR":
            color="white";
            background = "red"
            break;
    }
    return css`
        color: ${color};
        background-color:${background}
    `;
}

const Container = styled.div<styleProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    ${getStyledByType}

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Button;