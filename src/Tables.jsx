class Tables extends React.Component{
    render() {
      return (
      <div class="table-container">
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Sunday">
          <tr><th>Sunday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Monday">
          <tr><th>Monday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Tuesday">
          <tr><th>Tuesday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Wednesday">
          <tr><th>Wednesday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Thursday">
          <tr><th>Thursday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Friday">
          <tr><th>Friday</th></tr>
          <tr>
            <th>Todo</th>
            <th>Difficulty</th>
          </tr>
          <tr></tr>
        </table>
      </div>
      <div style="flex-grow: 8">
        <table style="table-layout: auto;" id="Saturday">
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
    
      deleteButton(row){
        // window.alert(row._id)
     
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
               //console.log(json)
               populateTable(json)
           });
     }
    
    updateButton(row){
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
          //console.log(json)
          populateTable(json)
      });
    }
    }

    export default Tables;