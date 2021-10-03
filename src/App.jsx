import React from 'react';

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Todo extends React.Component {
    // our .render() method creates a block of HTML using the .jsx format
    render() {
        return <tr>
        <td>{this.props.list_entry}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.deadline}</td>
            <td><input type="checkbox" onChange={ e => this.change(e) }/></td>
        </tr>

    }
    // call this method when the checkbox for this component is clicked
    change(e) {
        if(e.target.checked) {
            e.target.parentElement.parentElement.setAttribute("Style", "background-color: green");
        }
        else {
            e.target.parentElement.parentElement.setAttribute("Style", "background-color: none");
        }
    }
}

// main component
class App extends React.Component {
    constructor( props ) {
        super( props )
        // initialize our state
        this.state = { todos:[] }
        this.load()
    }

    // load in our data from the server
    load() {
        fetch( '/read', { method:'get', 'no-cors':true })
            .then( response => response.json() )
            .then( json => {
                this.setState({ todos:json })
            })
    }

    // render component HTML using JSX
    render() {
        return (
            <div className="App">
                <h2>Shopping List</h2>
                <div className="instructions">
                    <p>Add items to the shopping list by entering an item in the first field and how many of that item
                        you need in the second.</p>
                    <p>Note that the quantity field only accepts numbers.</p>
                    <p>You can also indicate if an item is urgent so it can be visually indicated as such.</p>
                </div>
                <form id="my_form">
                    <input type='text' id='list_entry' name='list_entry' placeholder="Add item to shopping list"></input>
                    <input type='number' id='quantity' name='quantity' placeholder="Quantity"></input>
                    <div className="checkbox">
                        <input type='checkbox' id='urgency' name="urgency"></input>
                        <label htmlFor="urgency">Urgent?</label>
                    </div>
                    <button id="submit_button" onClick={ e => {
                        this.add( e )
                    }}>Add item</button>
                </form>
                <br></br><br></br><br></br>
                <table id="shopping_list">
                    <tr className="header_row">
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Recommended Deadline</th>
                        <th>Got Item?</th>
                    </tr>
                    { this.state.todos.map( (todo,i) => <Todo key={i} list_entry={todo.list_entry} quantity={todo.quantity} deadline={todo.deadline} onclick={ this.toggle } /> ) }
                </table>
            </div>
        )
    }

    // when an Todo is toggled, send data to server
    toggle( name, completed ) {
        fetch( '/change', {
            method:'POST',
            body: JSON.stringify({ name, completed }),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    // add a new todo list item
    add( evt ) {
        const input = document.querySelector( '#my_form' ).elements;
        console.log("Started Add");

        var json = {}
        for(var i = 0 ; i < input.length - 1 ; i++){ // Subtract 1 because we don't want to include the label
            var item = input.item(i);
            if(item.type == "checkbox") { json[item.name] = item.checked; }
            else { json[item.name] = item.value; }
        }

        let today = new Date().toLocaleDateString()
        let deadline = new Date(today)

        if(json["urgency"]) {
            deadline.setDate(deadline.getDate() + 1)
            json["color"] = "orange"
        }
        else {
            deadline.setDate(deadline.getDate() + 7); // Deadline is in a week
            json["color"] = "yellow"
        }

        json["creation_date"] = today;
        json["deadline"] = deadline.toLocaleDateString();

        let body = JSON.stringify( json );

        fetch( '/add', {
            method:'POST',
            body : body,
            headers: { 'Content-Type': 'application/json' }
        })
            .then( response => response.json() )
            .then( json => {
                // changing state triggers reactive behaviors
                console.log(json)
                this.setState({ todos:json })
            })
    }

}

export default App;