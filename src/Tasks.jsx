import React from "react";

// get constant elements
const form = document.getElementById( "form" )
const formTitle = document.getElementById( "form-title" )
const task = document.getElementById( "name" )
const period = document.getElementById( "period" )
const deadlineDate = M.Datepicker.init( document.getElementById( "deadline-date" ) )
const deadlineHour = M.Timepicker.init( document.getElementById( "deadline-hour" ) )
const submitButton = document.getElementById( "submit-form-button" )

const addButton = document.getElementById( "add-button" )

// variables for submission
let _id = NaN;
let requestType = "/add";

class Task extends React.Component {
    // our .render() method creates a block of HTML using the .jsx format
    render() {
        return <tr>
            <td>{this.props.name}</td>
            <td>{numberToDateText(this.props.start)}</td>
            <td>{numberToHoursText(this.props.period)}</td>
            <td>{numberToDateText(this.props.deadline)}</td>
            <td>
                <a class="waves-effect waves-light indigo btn-small" onclick={e => this.edit(e)}>Edit</a>
                <a class="waves-effect waves-light red darken-2 btn-small" onclick={e => this.remove(e)}>Remove</a>
            </td>
        </tr>
    }
    
    edit = function( e ) {
        e.preventDefault()
    
        form.hidden = false
        formTitle.innerText = "Edit task:"
        task.value = this.props.name
        period.value = this.props.period
        deadlineDate.value = new Date( this.props.deadline )
        deadlineHour.value = new Date( this.props.deadline ).getHours() + ":00"
        requestType = "/edit"
        _id = this.props._id
    
        return false
    }

    remove = function( e ) {
        e.preventDefault()
    
        fetch( "/remove", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { _id:this.props._id } )
        })
        .then( ( response ) => response.json() )
        .then( function( appData ) {
            this.props.tasks.update( appData )
        })
    
        return false
    }
}

class Tasks extends React.Component {
    constructor( props ) {
        super( props )
        // initialize our state
        this.state = { tasks: [] }
        submitButton.onclick = this.submit
        addButton.onclick = this.add
        this.update()
    }

    add = function ( e ) {
        e.preventDefault()
    
        form.hidden = false
        formTitle.innerText = "Add new task:"
        requestType = "/add"
    
        return false
    }

    submit( e ) {
        // prevent default form action from being carried out
        e.preventDefault()
        form.hidden = true
    
        let interval = 60 * 60 * 1000 // number of milliseconds in an hour
        let deadline = Date.parse( deadlineDate.date ) + timeToNumber( deadlineHour.time )
    
        let json
        switch( requestType ) {
            case "/add":
                json = { name: task.value, period: Number.parseInt( period.value ), deadline };
                break;
            case "/edit": 
                json = { _id, name: task.value, period: Number.parseInt( period.value ), deadline };
                break;
        }
    
        const body = JSON.stringify( json )
    
        fetch( requestType, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body
        })
        .then( ( response ) => response.json() )
        .then( function( appData ) {
            this.update( appData )
        })
    
        return false
    }

    update() {
        fetch( "/update", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: "{}"
        })
        .then( ( response ) => response.json() )
        .then( function( appData ) {
            this.setState({ tasks: appData })
        })
    }

    // render component HTML using JSX 
    render() {
        submitButton.onclick = submit
        return (
            <tbody id="task-container">
                { this.state.tasks.map( (task, i) => <Task tasks={this} _id={task._id} name={task.name} start={task.start} period={task.period} deadline={task.deadline}/> ) }
            </tbody>
        )
    }
}

export default Tasks;

// --------------------------------------------------------------
// ---------- Data to text conversion helper functions ----------
// --------------------------------------------------------------

const numberToHoursText = function( number ) {
    let suffix = ( number == 1 )?"":"s"
    return "" + number + " hour" + suffix
}

const numberToDateText = function( number ) {
    let date = new Date( number )

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let pm = "AM"
    if ( hours >= 12 ) {
        pm = "PM"
        hours -= 12
    }
    if ( hours === 0 ) {
        hours = 12
    }

    return "" + hours + ":00 " + pm + " " + month + "/" + day + "/" + year
}

const timeToNumber = function( time ) {
    const interval = 60 * 60 * 1000 // number of milliseconds in an hour

    let components = time.split(':')
    let hours = parseInt(components[0]) + Math.round( parseInt( components[1] ) / 60 )
    return hours * interval
}
