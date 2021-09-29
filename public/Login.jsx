class Login extends React.Component {
    //Make a block of HTML using the jsx format
    render() {
        return <form action='/login' class="loginForm" method='POST'>
        <label>Returning player?</label>
        <label>Log in to start playing!</label>
        <div class="loginTextDiv">
          <input type='text' class="nes-input loginText" name='username' placeholder="Username"></input>
        </div>
        <div class="loginTextDiv">
          <input type='password' class="nes-input loginText" name='password' placeholder="Password"></input>
        </div>
        
        <div class="loginButton">
          <button id="login" class="nes-btn">Log In</button>
        </div>
        
      </form>
    }
}

class Register extends React.Component {
    //Make a block of HTML using the jsx format
    render(){
        return <form action='/register' class="loginForm" method='POST'>
        <label>New player?</label>
        <label> Create your account here!</label>
        <div class="loginTextDiv">
          <input type='text' class="nes-input loginText" name='username' placeholder="Username"></input>
        </div>
        <div class="loginTextDiv">
          <input type='password' class="nes-input loginText" name='password' placeholder="Password"></input>
        </div>
        <div class="loginButton">
          <button id="register" class="nes-btn">Register</button>
        </div>
      </form>
    }
}