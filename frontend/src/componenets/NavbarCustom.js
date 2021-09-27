import { Button, Navbar, Nav } from "react-bootstrap";
import classes from "./NavbarCustom.module.css";
import { useState } from "react";
import ModalCreation from "./ModalCreation";

async function logoutUser(credentials) {
  return fetch("/signOut", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function NavbarCustom(props) {
  const [showModal, setModal] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    const token = await logoutUser({
      test: 1,
    });

    if (token.worked) {
      props.setToken(null);
    }
  };

  const handleShow = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <Navbar bg="dark" variant="dark" className={classes.paddingLeft}>
      <Navbar.Brand href="#home">Contacts</Navbar.Brand>
      <Nav className="me-auto">
        <Button onClick={handleShow}> Add Contact </Button>
      </Nav>
      <Nav>
        <Button
          variant="danger"
          onClick={handleLogout}
          className={classes.paddingRight}
        >
          Logout
        </Button>
      </Nav>
      {showModal ? (
        <ModalCreation show={handleShow} onHide={handleClose} />
      ) : null}
    </Navbar>
  );
}

export default NavbarCustom;
