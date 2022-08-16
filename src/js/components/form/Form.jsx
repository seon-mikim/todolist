import React, {useState} from "react";
import "../form/form.css"


let number = 3;

function Form ({setTodos, todos}){

    const initialState ={
        id:0,
        title:"",
        body:"",
        isDone: false,
        
    };

    console.log(todos);

    const [todo, setTodo] = useState(initialState);
    const onChangHandler = (event) => {
        const{name, value} =event.target;
        setTodo({...todo,[name]:value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        setTodos([...todos, { ...todo, id: number }]);
        setTodo(initialState);
        number++;
      };

    return (<form className="to-do-form" onSubmit ={onSubmitHandler}>
                <div className="input-group">
                    <label className="title-label" >제목</label>
                    <input type="text" className="input-title" name="title" value={todo.title} onChange={onChangHandler}/>
                    <label className="body-label" >내용</label>
                    <input type="text" className="input-body" name="body" value={todo.body} onChange ={onChangHandler}/>
                </div>
                <button className="add-btn">추가하기</button>
           </form>
           )
}

export default Form 
