import React from "react";
import {Header, Avatar, ThemeProvider, Box} from '@primer/components'
import Form from './Form'
import Table from './Table'
import { getRequest, postRequest } from "../requests-helper"

class LostFoundComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lostItems: [], foundItems: [], activeEditObj: undefined }
    this.loadCollection()
  }

  reloadHandler() {
    this.setState({activeEditObj: undefined})
    this.loadCollection()
  }

  editHandler(e) {
    console.log("Handler for edits called" + JSON.stringify(e))
    this.setState({activeEditObj: e})
  }

  deleteHandler() {
    this.setState({activeEditObj: undefined})
    this.loadCollection()
  }

  loadCollection() {
    getRequest('/api/lostitems', {}, (data) => {
      this.setState({ lostItems : data })
    })
    getRequest('/api/founditems', {}, (data) => {
      this.setState({ foundItems : data })
    })
  }  

  render() {
    console.log("Rerendering main app")
    let { username } = this.props;
    username = username || "username@wpi.edu"
    return (
      <>
      <ThemeProvider>
        <Header>
          <Header.Item>
            <Header.Link href="#" fontSize={4}>
              <span>Lost & Found</span>
            </Header.Link>
          </Header.Item>
          <Header.Item full>Me</Header.Item>
          <Header.Item >{username}</Header.Item>
          <Header.Item>
            <Avatar src="https://github.com/octocat.png" size={40} square alt="@octocat" />
          </Header.Item>
        </Header>
        <Box display="flex">
          <Box flexGrow={1} p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
            <Table title="Found items" endpoint="founditems" collection={this.state.lostItems} 
                   deleteHandler={this.deleteHandler.bind(this)} editHandler={this.editHandler.bind(this)}/>
            <Table title="Lost items" endpoint="lostitems" collection={this.state.foundItems}
                   deleteHandler={this.deleteHandler.bind(this)} editHandler={this.editHandler.bind(this)}/>
          </Box>
          <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
            <Form title="Create new lost & found item" type="create" fields={{}} handler={this.reloadHandler.bind(this)}/>
            { this.state.activeEditObj ? <Form title="Edit lost & found item" type="edit" fields={this.state.activeEditObj} handler={this.reloadHandler.bind(this)}/> : null }
            
          </Box>
        </Box>
      </ThemeProvider>
      </>
    );
  }}

export default LostFoundComponent;
