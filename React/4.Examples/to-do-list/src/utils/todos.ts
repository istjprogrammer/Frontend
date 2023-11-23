class Todo {
    id : string;
    text : string;

    constructor(todoText: string){
        this.id = performance.now().toString();
        this.text = todoText;
    }
}

export default Todo;