import "./App.css";

import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import NavbarCustom from "./componenets/NavbarCustom";

import "bootstrap/dist/css/bootstrap.min.css";

import { ContactsContextProvider } from "./store/website-context";

import useToken from "./store/useToken";

function App(props) {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <style>{"body {background-color:hsl(171, 100%, 41%);"}</style>
        <LoginPage setToken={setToken} />
      </div>
    );
  }

  return (
    <div>
      <ContactsContextProvider>
        <NavbarCustom reload={props.reload} setToken={setToken} />
        <div className="wrapper">
          <ContactsPage />
        </div>
      </ContactsContextProvider>
    </div>
  );
}

export default App;
