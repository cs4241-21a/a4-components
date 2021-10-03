import React from "react";

let tableInstance

class Tables extends React.Component{

    constructor( props ) {
        super( props )
        // initialize our state
        tableInstance = this
      }
    render(){
        let tableString = tableInstance.populateTable()
        tableString = tableString.getElementsByTagName()
        return(
            <div>
            {tableString}
            </div>
        )
    }

    populateTable(){

        const tableStarter = function(day)
        {
            let table = document.createElement("table")
            table.id = day
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            let item = document.createTextNode(day)
            th.appendChild(item)
            tr.appendChild(th)

            return table

        }

                    let json = tableInstance.props.todos

                    let tableItems = []
    
                    for(let count = 1; count < json.length; count++){
                        if(json[count].type === 'todo' && json[count].user === json[0]){
                            tableItems.push(json[count])
                        }
                    }

                    let tables = []
    
                    tables.push(tableStarter('Sunday'))
                    tables.push(tableStarter('Monday'))
                    tables.push(tableStarter('Tuesday'))
                    tables.push(tableStarter('Wednesday'))
                    tables.push(tableStarter('Thursday'))
                    tables.push(tableStarter('Friday'))
                    tables.push(tableStarter('Saturday'))

                    let curTable = null

                   const tablePicker = function(day){
                       switch(day){
                           case 'Sunday': return 0; break;
                           case 'Monday': return 1; break;
                           case 'Tuesday': return 2; break;
                           case 'Wednesday': return 3; break;
                           case 'Thursday' : return 4; break;
                           case 'Friday' : return 5; break;
                           case 'Saturday' : return 6; break;
                       }
                    }
                                        
                    for(let count = 0; count < tableItems.length; count++){
                        let tr = document.createElement('tr')
                        let day = tableItems[count].day
                        curTable = tables[tablePicker(day)]
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
    
                        curTable.appendChild(tr)
                    }
        return curTable
    }
}

    export default Tables;