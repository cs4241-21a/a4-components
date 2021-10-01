import React from "react";

class App extends React.Component {

  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { appdata:[] }
    this.load()
  }

  //load data from server
  load() {
    fetch( '/read', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ appdata:json }) 
      })
  }

  add() {
    let name = document.getElementById( 'yourname' ),
    order = document.getElementById('order'),
    dist = document.getElementById('distance'),
      json = { yourname: name.value, yourorder: order.value, distance: dist.value},
      body = JSON.stringify( json );

    fetch( '/add', {
      method: 'post',
      body,
      headers: {'Content-type': 'application/json'}
    })
    .then( response => response.json())
    .then( json =>
      this.setState({ appdata:json })
      )
  }

  remove = (index) => {
    let json = {i: index},
    body = JSON.stringify(json)

    fetch( '/remove', {
      method: 'post',
      body,
      headers: {'Content-type': 'application/json'}
    })
    .then( response => response.json())
    .then( json =>
      this.setState({ appdata:json })
      )
  }

  edit = (index) => {
    let form = document.querySelector('form')

    form.elements['yourname'].value = this.state.appdata[index].yourname
    form.elements['order'].value = this.state.appdata[index].yourorder
    form.elements['distance'].value = this.state.appdata[index].distance
    form.elements['custId'].value = index;

  }

  update() {
    let name = document.getElementById( 'yourname' ),
    order = document.getElementById('order'),
    dist = document.getElementById('distance'),
    ind = document.getElementById('custId'),
      json = { yourname: name.value, yourorder: order.value, distance: dist.value, i: ind.value},
      body = JSON.stringify( json );
    
    fetch('/update', {
      method: 'post',
      body,
      headers: {'Content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(json =>
      this.setState({ appdata:json })
      )
  }

  render() {
    return (
      <div className="App">
        <center><img src="images/mendys.webp" alt="Mendy's Logo" width="360" height="120"/></center>
        <h1>ORDER DELIVERY ONLINE</h1> 
        <h2>PLEASE FILL OUT ALL FIELDS</h2>
        <hr style={{width: '70%'}}/>
        <OrderForm onClick={() => this.add()} onClick2={() => this.update()}/>
        <DataTable entries={this.state.appdata} remove={this.remove} edit={this.edit}/>
      </div>
    );
  }
}


class Row extends React.Component {
  remove=() => this.props.remove(this.props.index)
  edit=() => this.props.edit(this.props.index)

  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.time}</td>
        <td>{this.props.order}</td>
        <td>{this.props.dist}</td>
        <td>{this.props.dTime}</td>
        <td><button onClick={this.remove}>Delete</button></td>
        <td><button onClick={this.edit}>Edit</button></td>
      </tr>
    );
  }
}

class DataTable extends React.Component{
  remove=(index) => this.props.remove(index)
  edit=(index) => this.props.edit(index)

  render(){
    return(
      <center>
      <table id = 'dataTable'>
        <tr>
          <th>Name</th>
          <th>Time Placed</th>
          <th>Order</th>
          <th>Distance</th>
          <th>Expected Dropoff Time</th>
        </tr>
        <tbody>
          { this.props.entries.map( (entry,i) => <Row key={i} index={i}
          name={entry.yourname}
          time={entry.time} 
          order={entry.yourorder}
          dist={entry.distance}
          dTime={entry.dropTime}
          remove={this.remove}
          edit={this.edit}
            /> ) } 
        </tbody>
      </table>
      </center>
    );
  }
}

class OrderForm extends React.Component{
  render(){
    return(
      <form>
      <center>
      <h3>Full Name</h3>
      <input type='text' id='yourname' placeholder='Place Name Here'/>
      <h3>Order</h3>
      <input type='text' id='order' placeholder='Place Order Here'/>
      <h3>Distance From Restaurant</h3>
      <select name='distance' id='distance'>
            <option value='Not Far'>Not Far</option>
            <option value='Decently Far'>Decently Far</option>
            <option value='Far'>Far</option>
      </select>
      <input type="hidden" id="custId"/>
      <br/>
      <button class="button" type='button' onClick={this.props.onClick}>Submit</button>
      <button class="update_button" id='update_button' onClick={this.props.onClick2}>Update</button>
      </center>
      </form>
    )
  }
}


export default App;
