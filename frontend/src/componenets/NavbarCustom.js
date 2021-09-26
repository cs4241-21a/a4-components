import { Button, Navbar, Nav } from "react-bootstrap";
import classes from "./NavbarCustom.module.css";

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
  const handleLogout = async (e) => {
    e.preventDefault();
    const token = await logoutUser({
      test: 1,
    });

    if (token.worked) {
      props.setToken(null);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" className={classes.paddingLeft}>
      <Navbar.Brand href="#home">Contacts</Navbar.Brand>
      <Nav className="me-auto">
        <Button> Add Contact </Button>
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
    </Navbar>
  );
}

export default NavbarCustom;
