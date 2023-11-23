import {useState} from "react";
import style from "../utils/InsertTodo.module.css";

const InsertTodo:React.FC<{onAddTodo:(item:string)=>void}> = (props:any) => {
    const [text, setText] = useState("");
   
    //추가 버튼 누르기
    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        //아무것도 입력이 되지 않았을 때는 출력을 막기
        if(text.trim() !== ""){
            props.onAddTodo(text);
            setText("");
        }
    }

    const changeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler} className={style.form}>
            <h3>할 일 추가</h3>
            <input type="text" onChange={changeHandler} value={text}/>
            <button>추가</button>
            </form>
        </div>
    );
}

export default InsertTodo;