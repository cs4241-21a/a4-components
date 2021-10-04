import React from "react";
import Todoitem from "./Todoitem";
import { StateProps } from './Todo';
import './Datatable.css';


interface Iprops {
  todoList: StateProps[];
}

// must tell it what data it will achieve
const Datatable = ({ todoList }: Iprops) => {
  // get each item from it, using traverse
  var todolistdom = todoList.map(item => <Todoitem key={item.id} todo={item}/>);

  return (
    <div className="Data-table">
      <table id="dataTable">
        <tr><th>Name</th><th>Savings</th><th>Cost</th><th>Balance</th></tr>
        <tr><td>jerry</td><td>12</td><td>1</td><td>11</td></tr>
        { todolistdom }
      </table>
      <br /><br />
    </div>
  )
}

export default Datatable;