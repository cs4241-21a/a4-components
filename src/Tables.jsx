import React from "react";

let tableInstance

class Tables extends React.Component{

    constructor( props ) {
        super( props )
        // initialize our state
        tableInstance = this
      }
    render(){
        return tableInstance.populateTable()
    }
    /*
    render() {
      return (
      <div class="table-container">
      <div>
        <table id="Sunday">
          <tr><th>Sunday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div>
        <table id="Monday">
          <tr><th>Monday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div>
        <table id="Tuesday">
          <tr><th>Tuesday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div>
        <table id="Wednesday">
          <tr><th>Wednesday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div>
        <table id="Thursday">
          <tr><th>Thursday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div>
        <table id="Friday">
          <tr><th>Friday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div>
        <table id="Saturday">
          <tr><th>Saturday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
      )}
    //style="table-layout: auto;"
    //style="flex-grow: 8"
*/

    populateTable(){

        //const todoInput = document.querySelector( '#todo' )
        //const dayInput = document.querySelector( '#day' )
       // const difficultyInput = document.querySelector('#difficulty')
/*
        const tableDeleter = function(day){
            let table = document.getElementById(day);
            let rowCount = table.rows.length;
            for (let count = 1; count < rowCount; count++) {
                table.deleteRow(1);
            }
        }
        */

        const tableStarter = function(day)
        {
            let table = document.createElement("table")
            table.id = day
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            let item = document.createTextNode(day)
            th.appendChild(item)
            tr.appendChild(th)

        }

                    let json = tableInstance.props.todos

                    let tableItems = []
    
                    for(let count = 1; count < json.length; count++){
                        if(json[count].type === 'todo' && json[count].user === json[0]){
                            tableItems.push(json[count])
                        }
                    }
    
                    tableStarter('Sunday')
                    tableStarter('Monday')
                    tableStarter('Tuesday')
                    tableStarter('Wednesday')
                    tableStarter('Thursday')
                    tableStarter('Friday')
                    tableStarter('Saturday')

                    let table = null
                    
                    for(let count = 0; count < tableItems.length; count++){
                        let tr = document.createElement('tr')
                        let day = tableItems[count].day
                        table = document.getElementById(day)
                        let td = document.createElement('td')
                        let item = document.createTextNode(tableItems[count].todo)
                        td.appendChild(item)
                        tr.appendChild(td)
    
                        td = document.createElement('td')
                        item = document.createTextNode(tableItems[count].difficulty)
                        td.appendChild(item)
                        tr.appendChild(td)
    
                        td = document.createElement('td')
                        item = document.createElement('button')
                        item.appendChild(document.createTextNode('UPDATE'))
                        td.appendChild(item)
                        tr.appendChild(td)
    
                        item.onclick = function() {updateButton(tableItems[count])}
    
                        td = document.createElement('td')
                        item = document.createElement('button')
                        item.appendChild(document.createTextNode('DELETE'))
                        td.appendChild(item)
                        tr.appendChild(td)
    
                        item.onclick = function() {deleteButton(tableItems[count])}
    
                        table.appendChild(tr)
                    }
        return table
    }
}

    export default Tables;