import React from 'react';
import EditPage from "./Components/EditPage"
import ResponsesPage from "./Components/ResponsesPage"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    //let username = this.fetchUsername();

    this.state = {
      loggedIn: true,
      onResponses: true};

    this.closeResponses = this.closeResponses.bind(this)
    this.stayEditing = this.stayEditing.bind(this)
    this.goToResponses = this.goToResponses.bind(this)
    this.refresh = this.refresh.bind(this)
    this.waitAndUpdate = this.waitAndUpdate.bind(this);
    this.signOut = this.signOut.bind(this)
  }

  render() {
    //console.log("Rendering now...");
    //console.log("Have we receieved any data?");
    console.log("Rendering..., responses is " + this.state.onResponses);
    console.log("Are we logged in?" + this.state.loggedIn);
    if (!this.state.onResponses || this.state.goBackToEdit) {
      if (this.state.loggedIn) {
        return <>
          <EditPage waitAndUpdate={this.waitAndUpdate} refresh={this.refresh} onResponses={this.goToResponses} signOut={this.signOut} data={this.state.tableData} username={this.state.username} usernames={this.state.usernames} />
        </>;
      } else {
        window.location.replace("index.html");
        return null;
      }
    } else {
      if (this.state.retrievedTableData) {
        //console.log("We're passing " + this.state.tableData);
        return <ResponsesPage stayOnEdit={this.stayEditing} onClose={this.closeResponses} usernames={this.state.usernames} data={this.state.tableData} loggedIn={this.state.loggedIn} />;
      } else {
        return (<h1>Loading table data...</h1>);
      }
    }
  }

  waitAndUpdate() {
    console.log("Waiting...")
    setTimeout(
      function() {
          //this.setState({ goBackToEdit: true });
          //console.log("And updating!");
          window.location.reload();
      }
      .bind(this),
      1000
  );
  }

  stayEditing() {
    console.log("Staying on the edit page!");
    this.setState({
      loggedIn: true,
      onResponses: false
    });
  }

  closeResponses() {
    console.log("Closing the responses!");
    this.setState({
      loggedIn: this.state.loggedIn,
      onResponses: false
    });
  };

  goToResponses() {
    console.log("Going to responses!");
    this.setState({
      loggedIn: this.state.loggedIn,
      goBackToEdit: false,
      onResponses: true
    });
  };

  signOut() {
    console.log("Signing out!");
    fetch('/signOut', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      return res.json();
    }).then(json => {
      let signOutSuccess = json.signOutSuccess;
      if (signOutSuccess) {
        console.log("Signing out now!");
      }
    })
    this.setState({
      loggedIn: false,
      onResponses: false
    });
  }

  fetchUsername() {
    fetch('/getUsername', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      return res.json();
    }).then(innerJson => {
      console.log("InnerJson is " + Object.keys(innerJson));
      let innerUsername = innerJson.username;
      console.log("Our inner username is: " + innerUsername);
    });
  }

  loggedIn() {
      fetch('/getUsername', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        return res.json();
      }).then(innerJson => {
        //console.log("InnerJson is " + Object.keys(innerJson));
        let innerUsername = innerJson.username;
        console.log("Username is " + innerUsername);
        return !(innerUsername === null || innerUsername === undefined || innerUsername.trim() === "")
      });
  }

  refresh() {
    this.state = { loggedIn: true, onResponses: false }
  }

  fetchTableData() {
    fetch('/getFullTableData', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      return res.json();
    }).then(json => {
      //console.log(json.ratings);

      fetch('/getUsername', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        return res.json();
      }).then(innerJson => {
        let innerUsername = innerJson.username;
        //console.log("When setting the state, our data is " + json.ratings);
        console.log("Our username is defined as {" + innerUsername + "}")
        if (innerUsername == undefined || innerUsername === "") {
          this.setState({ loggedIn: false, onResponses: this.state.onResponses, tableData: json.ratings, username: innerUsername, usernames: json.usernames, retrievedTableData: true });
        } else {
          console.log("Does this trigger?");
          this.setState({ loggedIn: true, onResponses: this.state.onResponses, tableData: json.ratings, username: innerUsername, usernames: json.usernames, retrievedTableData: true });
        }
      })
      /*let rowIndex = 0;
      for (let rowData of json.ratings) {
  
          let row = table.insertRow(-1);
  
          let username = row.insertCell(0);
          let name = row.insertCell(1);
          let studentYear = row.insertCell(2);
          let yearsRemaining = row.insertCell(3);
          let favoriteDorm = row.insertCell(4);
          let favoriteDining = row.insertCell(5);
          let favoriteSpot = row.insertCell(6);
          let notes = row.insertCell(7);
  
          row.cells[0].innerHTML = json.usernames[rowIndex];
          row.cells[1].innerHTML = rowData.name;
          row.cells[2].innerHTML = rowData.studentYear;
          row.cells[3].innerHTML = rowData.yearsRemaining;
          row.cells[4].innerHTML = rowData.favoriteDorm;
          row.cells[5].innerHTML = rowData.favoriteDining;
          row.cells[6].innerHTML = rowData.favoriteSpot;
          row.cells[7].innerHTML = rowData.notes;
  
          rowIndex++;
      } */
    });
  }


  componentDidMount() {
    //console.log("Data:" + this.state.data);
    //console.log("Fetching table data!");
    let loggedIn = this.loggedIn;
    console.log("Logged in status..." + loggedIn);
    this.state = { loggedIn: loggedIn, onResponses: false }
    this.fetchTableData();
  }
}

export default App;