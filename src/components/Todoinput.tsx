import React, { useState } from "react";
import { StateProps } from './Todo';
import './Todoinput.css';
  
// like interface in java, declare addTodo which returns void
interface IProp {
  addTodo: (todo: StateProps) => void;
}

const Todoinput = ({ addTodo }: IProp) => {
  const [ text, setText ] = useState('');
  const [ savings, setSavings ] = useState('');
  const [ costs, setCosts] = useState('');
  // get the value of input
  const changeTextHolder = (e: React.ChangeEvent) => {
    // we tell the system that e is a HTMLInputElement, so it has a value that you can achieve
    setText((e.target as HTMLInputElement).value);
  }
  // get the value of savings
  const changeSavingsHolder = (e: React.ChangeEvent) => {
    // we tell the system that e is a HTMLInputElement, so it has a value that you can achieve
    setSavings((e.target as HTMLInputElement).value);
  }
  // get the value of cost
  const changeCostsHolder = (e: React.ChangeEvent) => {
    // we tell the system that e is a HTMLInputElement, so it has a value that you can achieve
    setCosts((e.target as HTMLInputElement).value);
  }

  // when click the button, this function will run
  const addTodoHolder = () => {
    //console.log(text);
    //console.log(savings);
    
    addTodo({
      id: new Date().getTime(),
      text: text,
      savings: savings,
      cost: costs
    });
    setText('');
    setSavings('');
    setCosts('');

    var json = { id: new Date().getTime(), name: text, savings: parseInt(savings), cost: parseInt(costs), balance: parseInt(savings) - parseInt(costs) },
    body = JSON.stringify( json );
    // console.log(body);

    fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body
    })
    .then( response => response.json() )
    .then( json => {
      alert(json.result);
    })
  }

  return (
    <div className="Todo-input">
      <table>
        <tr>
          <td>Name:</td>
          <td>
            <input type="text" placeholder="please enter name here!" onChange={changeTextHolder} value={text}/>
          </td>
        </tr>
          
        <tr>
          <td>Savings:</td>
          <td>
            <input type="text" placeholder="please enter number here!" onChange={changeSavingsHolder} value={savings}/>
          </td>
        </tr>
        
        <tr>
          <td>Cost:</td>
            <td>
              <input type="text" placeholder="please enter number here!" onChange={changeCostsHolder} value={costs}/>
            </td>
        </tr>
      </table>
      <button onClick={addTodoHolder}>add</button>
    </div>
  )
}



export default Todoinput;