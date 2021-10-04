import React from "react";
import { StateProps } from './Todo';

interface IProps {
  todo: StateProps;
}

const Todoitem = ({todo}: IProps) => {
  var num1 = parseInt(todo.savings);
  var num2 = parseInt(todo.cost);
  return (
    <tr>
      <td> {todo.text} </td>
      <td> {todo.savings} </td>
      <td> {todo.cost} </td>
      <td> {num1-num2} </td>
    </tr>
  )
}

export default Todoitem;