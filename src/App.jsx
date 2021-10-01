
import React from "react";

class App extends React.Component {
  render() {
    return (
    <ul>
      <li>
        <label for="todo">Todo:</label>
        <textarea id="todo" name="todo"></textarea>
      </li>
      <li>
        <label for="day">Select Day of the Week:</label>
          <select id="day" name="day">
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
        </select>
      </li>
      <li>
        <label for="difficulty">Select Task Difficulty:</label>
          <select id="difficulty" name="difficulty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
      </li>
      <li class="button">
        <button type="button" onClick={this.submit} id="submitButton">submit</button>
      </li>     
    </ul>
    );
  }
    submit(){
      const todoInput = document.querySelector( '#todo' )
      const dayInput = document.querySelector( '#day' )
      const difficultyInput = document.querySelector('#difficulty')

      const json = { todo: todoInput.value, 
        day: dayInput.value, 
        difficulty: difficultyInput.value,
        type: 'todo',
        user: null
        }
    const body = JSON.stringify( json )

    fetch( '/submit', {
    method:'POST',
    body:JSON.stringify({todo:todoInput.value, day:dayInput.value, difficulty:difficultyInput.value, type:'todo', user:null}),
    headers: {
    'Content-Type': 'application/json'
    }
    })
    .then( function( response ) {
    return response.json()
    })
    .then(function(json){
    console.log(json)
    populateTable(json)
    });
    }
}

export default App;
