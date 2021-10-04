import React, { useState } from "react";
import Todoinput from "./Todoinput";
import Datatable from "./Datatable";

export interface StateProps {
  id: number;
  text: string;
  savings: string;
  cost: string;
}

const Todo = () => {
  // saying that todoList is an array similar to StateProps
  const [todoList, setTodolist] = useState<StateProps[]>([]);
  
  // change the state
  //const changeTodo = (id: number) => {
  //}

  // add data
  const addTodo = (todo: StateProps) => {
    setTodolist([...todoList, todo]);
  }

  return (
    <div className="todo">
      <b>Table:</b>
      <Datatable todoList={todoList}/>
      <br />
      <Todoinput addTodo={addTodo} />
    </div>
  )
}

export default Todo;