import React from "react";
import {Header, Avatar, Button, ThemeProvider, Link} from '@primer/components'

class LoginComponent extends React.Component {
  render() {
    return (
      <>
      <ThemeProvider>
        <Header>
          <Header.Item>
            <Header.Link href="#" fontSize={4}>
              <span>Lost & Found</span>
            </Header.Link>
          </Header.Item>
          <Header.Item full></Header.Item>
          <Header.Item>
            <Avatar src="https://github.com/octocat.png" size={40} square alt="@octocat" />
          </Header.Item>
        </Header>
        <Button><Link href="http://localhost:3000/auth/github">Login with GitHub</Link></Button>
      </ThemeProvider>
      </>
    );
  }
}

export default LoginComponent;