import React from "react";
import Todo from "../todo/Todo";
import "../list/list.css"

function List ({todos, setTodos}) {
    const onDeleteHanlder = (todoId) => {
        const newTodos = todos.filter((todo)=>{
            return todo.id !== todoId
        })
        setTodos(newTodos)
    }

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo)=>{
            if(todo.id === todoId){
                return{  
                        ...todo,
                        isDone: !todo.isDone,
                      }
            }else{
                return{...todo}
            }
        })
        setTodos(newTodos)
    }


    return( <div className="list-area">
                <span className="todo-title">Working🤔</span>
                <div className="list-wrap">
                    {todos.map((todo)=>{
                        if(!todo.isDone) {
                            return(
                                <Todo
                                todo={todo}
                                ket={todo.id}
                                setTodos={setTodos}
                                onDeletHanlder={onDeleteHanlder}
                                onEdiHandler={onEditHandler}
                                />
                            )
                        }else{
                            return null
                        }
                    })}
                </div>
                
                
                <span className="done-title">Done👍</span>
                <div className="list-wrap">
                    {todos.map((todo)=>{
                        if(todo.isDone) {
                            return(
                                <Todo
                                todo={todo}
                                ket={todo.id}
                                setTodos={setTodos}
                                onDeletHanlder={onDeleteHanlder}
                                onEdiHandler={onEditHandler}
                                />

                            )
                        }else{
                            return null
                        }
                    })}
                </div>
            </div>
    )
}

export default List