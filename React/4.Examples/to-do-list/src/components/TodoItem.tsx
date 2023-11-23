import style from "../utils/TodosItem.module.css";

const TodoItem:React.FC<{text: string; 
        id: string; onRemoveTodo:(id:string)=>void}> = (props) =>{
    return <li className={style.item}>{props.text}
    <input type="button" value="삭제" onClick={()=>{props.onRemoveTodo(props.id)}}/></li>
}

export default TodoItem;