import React from "react";
import {Header, Avatar, Button, ThemeProvider, TextInput, FormGroup, ButtonPrimary} from '@primer/components'
import CreateLostFoundItem from './CreateLostFoundItem'
import EditLostFoundItem from './EditLostFoundItem'
import Table from './Table'

class LostFoundComponent extends React.Component {
  render() {
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
          <Table title="Found items" endpoint="founditems"/>
          <Table title="Lost items" endpoint="lostitems"/>
          <EditLostFoundItem />
          <CreateLostFoundItem />
        </ThemeProvider>
      </>
    );
  }}

export default LostFoundComponent;
