import "./App.css";

import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import { useState } from "react";
import NavbarCustom from "./componenets/NavbarCustom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState();

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
      <NavbarCustom setToken={setToken} />
      <div className="wrapper">
        <ContactsPage />
      </div>
    </div>
  );
}

export default App;
