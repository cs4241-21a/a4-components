
import React from "react";
import Tables from "./Tables";

let appInstance

class App extends React.Component {

  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { todos:[] }
    appInstance = this
  }

  loadTable(){

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

    return(
      fetch( '/loadTable', {
      method:'POST',
      body: JSON.stringify({todo:todoInput.value, day:dayInput.value, difficulty:difficultyInput.value, type:'todo', user:null}),
      headers: {
      'Content-Type': 'application/json'
      }
      })
      .then( function( response ) {
        return response.json()
        })
        .then(function(response2){
          return response2
        })
    )
  }


  render() {
    return (
    <div>
    <form method="post">
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
        <button type="button" onClick={appInstance.submit} id="submitButton">submit</button>
      </li>     
    </ul>
    </form>

    <p>In the table, click on a delete button to delete that todo, 
    and the update button to replace any part of that todo with what's in the inputs above!</p>
    <h2>Your Todos:</h2>
    </div>
   
    );
    // table code
    //<Tables todos = {appInstance.state.todos} update = {appInstance.updateButton} delete = {appInstance.deleteButton} ></Tables>

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
    appInstance.loadTable()
    .then(response =>(
      appInstance.setState({todos:response}))
    )
    });
    }

    deleteButton(row){

      const todoInput = document.querySelector( '#todo' )
      const dayInput = document.querySelector( '#day' )
      const difficultyInput = document.querySelector('#difficulty')

      json = { todo: todoInput.value, 
               day: dayInput.value, 
               difficulty: difficultyInput.value,
               type: 'todo' ,
               _id: row._id,
               user:null 
       }
       body = JSON.stringify( json )
   
       fetch( '/delete', {
           method:'POST',
           body:JSON.stringify({todo:row.todo, day:row.day, difficulty: row.difficulty, type: 'todo', _id:row._id, user:null}),
           headers: {
               'Content-Type': 'application/json'
           }
         })
         .then( function( response ) {
             return response.json()
         })
         .then(function(json){
          appInstance.loadTable()
          .then(response =>(
          appInstance.setState({todos:response}))
    )
         });
   }
  
  updateButton(row){

      const todoInput = document.querySelector( '#todo' )
      const dayInput = document.querySelector( '#day' )
      const difficultyInput = document.querySelector('#difficulty')

      json = { todo: todoInput.value, 
          day: dayInput.value, 
          difficulty: difficultyInput.value,
          type: 'todo', 
          _id: row._id,
          user:null 
  }
  body = JSON.stringify( json )
  
  fetch( '/update', {
      method:'POST',
      body:JSON.stringify({todo:todoInput.value, day:dayInput.value, difficulty:difficultyInput.value, type: 'todo', _id:row._id,user:null}),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then( function( response ) {
        return response.json()
    })
    .then(function(json){
      appInstance.loadTable()
      .then(response =>(
      appInstance.setState({todos:response}))
    )
    });
  }
}

export default App;
