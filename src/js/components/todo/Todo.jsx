import React from "react";
import "../todo/todo.css"

function Todo({todo, onDeletHanlder, onEdiHandler}) {
    return  <div className="todo-list">
                    
                <div className=" todo-item">
                    <span className="item-title">{todo.title}</span>
                    <span className="item-body">{todo.body}</span>
                  
                <div className="btn-area">
                    <button  onClick ={()=>onDeletHanlder(todo.id)} className="btn-del">삭제하기</button>
                    <button onClick ={()=>onEdiHandler(todo.id)} className="btn-complete">
          {todo.isDone ? "취소" : "완료"}
        </button>
                    
                </div>
                </div>
            </div>
}

export default Todo