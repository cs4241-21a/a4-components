import React from 'react';


class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = { appData:[] }
    this.modifyInputBoxes = this.modifyInputBoxes.bind(this)
    this.delete = this.delete.bind(this)
    
  }

  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return (
      <tr>  
        <td id={'id'+ this.props.id}>{this.props.id}</td> 
        <td id={'fname'+ this.props.id}>{this.props.fname}</td> 
        <td id={'lname'+ this.props.id}>{this.props.lname}</td>
        <td id={'sex'+ this.props.id}>{this.props.sex}</td>
        <td id={'class' + this.props.id}>{this.props.ageClass}</td> 
        <td id={'dateJoined'+ this.props.id}>{this.props.dateJoined}</td>
        <td id={'membershipType'+ this.props.id}>{this.props.membershipType}</td>
        <td id={'expireDate'+ this.props.id}>{this.props.expireDate}</td>
        <td> <span title='Modify this entry' class='modifyButtons' onClick={() => this.modifyInputBoxes(this.props.id)}> </span> </td>
        <td> <span title ='Delete this entry' class='deleteButtons' onClick={() =>this.delete(this.props.id)}> </span> </td>
    </tr>
    )
  }
   
delete(id) {
  fetch( '/delete', { 
    method:'POST',
    body: JSON.stringify({ 
      id: id,
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then( response => response.json() )
  .then( json => {
     // changing state triggers reactive behaviors
     this.props.app.setState({ appData:json }) 
  })
}
  modifyInputBoxes(id) {

    const  primaryButton = document.getElementById( 'primaryButton' )
    const secondaryButton = document.getElementById( 'secondaryButton' )

    this.copyCellsToInputFields(id)
    
    primaryButton.innerHTML = 'Modify'
    primaryButton.style.backgroundColor = '#ffd814'
    primaryButton.style.borderColor = '#ffd814'
    primaryButton.style.color = '0x000000'
    secondaryButton.innerHTML = 'Cancel Modifying'
    
  }

  copyCellsToInputFields(id) {
    const inputId = document.getElementById( 'id' )
    const inputFname = document.getElementById( 'fname' )
    const inputLname = document.getElementById( 'lname' )
    const inputSex = document.getElementById( 'sex' )
    const inputClass = document.getElementById( 'class' )
    const inputDateJoined = document.getElementById( 'dateJoined' )
    const inputMembershipType = document.getElementById( 'membershipType' )
    const newExpireDate = document.getElementById( 'expireDate' )

    inputId.value = id
    inputFname.value = document.getElementById( 'fname' +id).innerHTML
    inputLname.value  = document.getElementById( 'lname' +id).innerHTML
    inputSex.value  = document.getElementById( 'sex' + id).innerHTML
    inputClass.value = document.getElementById( 'class' +id).innerHTML
    inputDateJoined.value  = document.getElementById( 'dateJoined' +id).innerHTML
    inputMembershipType.value = document.getElementById( 'membershipType' +id).innerHTML
    newExpireDate.value = document.getElementById( 'expireDate' +id).innerHTML
  }

}

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { appData:[] }
    this.primaryButtonAction = this.primaryButtonAction.bind(this)
    this.secondaryButtonAction = this.secondaryButtonAction.bind(this)
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/retrieve', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ appData:json }) 
      })
    }

  // render component HTML using JSX 
  render() {
    return (
      <div className="App">
      <img id = 'logo' src = 'resources/logo.webp' width='300px' height='300px' title='XXXL Gym Logo'></img>

      <form id = 'form'>
       <label for='id'> ID: </label><br></br>
       <input type='number' id = 'id' name = 'name' disabled></input> <br></br>

        <label for='fname'>First name:</label><br></br>
        <input type='text' id='fname' name='fname' required='required' pattern='[A-Za-z0-9]{1,20}'></input> <br></br>
      
        <label for='lname'>Last name:</label><br></br>
        <input type='text' id='lname' name='lname' required='required' pattern='[A-Za-z0-9]{1,20}'></input> <br></br>

        <label for='sex'> Sex:</label><br></br>
        <select id='sex' name='sex'>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select> <br></br>
      
        <label for='class'> Age Class:</label><br></br>
        <select id='class' name='ageClass'>
          <option value='Teen'>Teen</option>
          <option value='Junior'>Junior</option>
          <option value='Open'>Open</option>
          <option value='Master1'>Master1</option>
          <option value='Master2'>Master2</option>
          <option value='Master3'>Master3</option>
        </select> <br></br>
      
        <label for='dateJoined'>Date Joined:</label><br></br>
        <input type='date' id='dateJoined' name='fname' onChange={this.updateExpireDate}></input> <br></br>
      
        <label for='membershipType'>Membership Type:</label><br></br>
        <select id='membershipType' name='membershipType' onChange={this.updateExpireDate}>
          <option value='Monthly'>Monthly</option>
          <option value='Yearly'>Yearly</option>
          <option value='Lifetime'>Lifetime</option>
        </select> <br></br>
      
        <label for='expireDate'>Expire Date:</label><br></br>
        <input type='date' id='expireDate' name='expireDate' disabled></input> <br></br>  

        <div id='formButtons'>
          <button id='primaryButton' class='staticButtons' onClick={this.primaryButtonAction}>Add New Member</button><br></br>
          <button id='secondaryButton' class='staticButtons' onClick={this.secondaryButtonAction}>Clear Form</button>        
        </div>
      </form>
        <table id='table'>
          <colgroup>
            <col id='idCol' />
            <col id='fnameCol' />
            <col id='lnameCol' />
            <col id='sexCol' />
            <col id='classCol' />
            <col id='dateJoinedCol' />
            <col id='membershipTypeCol' />
            <col id='expireDateCol' />
          </colgroup>

        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Sex</th>
          <th>Age Class</th>
          <th>Date Joined</th>
          <th>Membership Type</th>
          <th>Expire Date</th>
        </tr>

        <tbody id='oldTbody'>
          { this.state.appData.map( (row,i) => <Row app={this} id={row.id} fname={row.fname} lname={row.lname} sex={row.sex} ageClass={row.ageClass} dateJoined={row.dateJoined} membershipType={row.membershipType} expireDate={row.expireDate} modifyFunc={this.modify}/> ) }
        </tbody>
    </table>
      </div>
    )
  }

     //returns false if there are empty fields in the form
     verifyFields( ) {
      const inputId = document.getElementById( 'id' )
      const inputFname = document.getElementById( 'fname' )
      const inputLname = document.getElementById( 'lname' )
      const inputSex = document.getElementById( 'sex' )
      const inputClass = document.getElementById( 'class' )
      const inputDateJoined = document.getElementById( 'dateJoined' )
      const inputMembershipType = document.getElementById( 'membershipType' )
      const newExpireDate = document.getElementById( 'expireDate' )
  
      let d  = new Date(inputDateJoined.value)
      let dateIsValid = (d.getTime() === d.getTime())
      if (inputFname.value === '' || inputLname.value === '' || !dateIsValid
        ||  inputClass.value === '' || inputMembershipType.value === '')
        {
        return false
        }
  
      return true
    }
  
      primaryButtonAction( evt ) {
        evt.preventDefault()
      
        const inputId = document.getElementById( 'id' )
        const inputFname = document.getElementById( 'fname' )
        const inputLname = document.getElementById( 'lname' )
        const inputSex = document.getElementById( 'sex' )
        const inputClass = document.getElementById( 'class' )
        const inputDateJoined = document.getElementById( 'dateJoined' )
        const inputMembershipType = document.getElementById( 'membershipType' )
        const newExpireDate = document.getElementById( 'expireDate' )
        
        const primaryButtonText = document.getElementById('primaryButton').innerHTML

        if (this.verifyFields()) {
          let body = JSON.stringify({ 
            id: inputId.value,
            fname: inputFname.value,
            lname: inputLname.value,
            sex: inputSex.value,
            ageClass: inputClass.value,
            dateJoined: inputDateJoined.value,
            membershipType: inputMembershipType.value,
            expireDate: newExpireDate.value})

            if(primaryButtonText === 'Add New Member') {
              fetch( '/add', { 
                method:'POST',
                body: body,
                headers: { 'Content-Type': 'application/json' }
              }).then( response => response.json() )
                  .then( json => {
                 this.setState({ appData:json }) 
              })
            } else {
              fetch( '/modify', { 
                method:'POST',
                body: body,
                headers: { 'Content-Type': 'application/json' }
              }).then( response => response.json() )
                  .then( json => {
                 this.setState({ appData:json }) 
              })
            }
        } else {
          alert('One or more form fields are empty')
        }
      }

      secondaryButtonAction(e) {
        const primaryButton = document.getElementById( 'primaryButton' )
        const secondaryButton = document.getElementById( 'secondaryButton' )

        let secondaryButtonText = secondaryButton.innerHTML
        this.clearForm(e)

        if (secondaryButtonText === 'Cancel Modifying') {
          primaryButton.innerHTML = 'Add New Member'
          primaryButton.style.backgroundColor = '#42B72A'
          primaryButton.style.borderColor = '#42B72A'
          primaryButton.style.color = '0xffffff'
          secondaryButton.innerHTML = 'Clear Form' 
        }
      }

  clearForm(e) {
    e.preventDefault()

    const inputId = document.getElementById( 'id' )
    const inputFname = document.getElementById( 'fname' )
    const inputLname = document.getElementById( 'lname' )
    const inputSex = document.getElementById( 'sex' )
    const inputClass = document.getElementById( 'class' )
    const inputDateJoined = document.getElementById( 'dateJoined' )
    const inputMembershipType = document.getElementById( 'membershipType' )
    const newExpireDate = document.getElementById( 'expireDate' )
    
    inputId.value = ''
    inputFname.value = ''
    inputLname.value = ''
    inputSex.value = ''
    inputClass.value = ''
    inputDateJoined.value = ''
    inputMembershipType.value = ''
    newExpireDate.value = ''
  }

  

  updateExpireDate( ) {
    const inputDateJoined = document.getElementById( 'dateJoined' )
    const inputMembershipType = document.getElementById( 'membershipType' )
    const newExpireDate = document.getElementById( 'expireDate' )

    let newDate = new Date(inputDateJoined.value)

   switch (inputMembershipType.value) { 
     case 'Monthly':
       newDate.setMonth(newDate.getMonth() + 1)
       break;
     case 'Yearly': 
       newDate.setFullYear(newDate.getFullYear() + 1)
       break;
     case 'Lifetime':
       newDate.setFullYear(newDate.getFullYear() + 100)
       break;
     default:
       console.log('Unknown membership type' + inputMembershipType.value)
   }

   let month = (newDate.getMonth() + 1)
   let date = newDate.getDate()

   let stringMonth = month
   if (month < 10) {
     stringMonth = '0' + stringMonth
   } 
   let stringDate = date
   if (date < 10) {
     stringDate = '0' + stringDate
   }

   newExpireDate.value = newDate.getFullYear() + '-' + stringMonth + '-' + stringDate
 }

 
 
}

export default App;