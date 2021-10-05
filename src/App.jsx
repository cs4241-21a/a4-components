import React from 'react';
import Form from './Form';

import './style.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    }
    this.requestData = this.requestData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.dateToReadable = this.dateToReadable.bind(this);
    this.requestData();
  }

  dateToReadable(date) {
    const split = date.split('-');
    return monthNames[split[1] - 1] + ' ' + split[2] + ', ' + split[0]
  }

  requestData() {
    console.log('requesting');
    fetch('/getData', {method:'POST', body: ''})
    .then(response => { return response.json() })
    .then(json => {
      this.handleData(json)
    });
  }

  handleData(json) {
    console.log(json);
    let rows = [];
    rows.push(<Row firstName='First Name' birthday='Birthday' age='Age' fullName='Full Name' />);
    json.forEach(entry => {
      rows.push(<Row firstName={entry.firstName} birthday={this.dateToReadable(entry.birthday)} age={entry.age} fullName={entry.fullName} />);
    });
    console.log('Rows', rows)
    this.setState({
      rows: rows
    });
  }

  render() {
    return (
      <div className="App">
      <Form requestData={this.requestData}/>
      <Database rows={this.state.rows}/>
      </div>
      );
    }
  }

  class Database extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className='database-view'>
        { this.props.rows }
        </div>
        );
      }
    }

    function Row(props) {
      return(
        <div id='entry'>
        <div>
        <p> { props.firstName } </p>
        </div>
        <div>
        <p> { props.birthday } </p>
        </div>
        <div>
        <p> { props.age } </p>
        </div>
        <div>
        <p> { props.fullName} </p>
        </div>
        </div>
        )
      }

      export default App;