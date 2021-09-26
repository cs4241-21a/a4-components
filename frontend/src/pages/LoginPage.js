import "./LoginPage.css";
import PropTypes from "prop-types";
import { useState } from "react";

import { Form, Button, Card, InputGroup } from "react-bootstrap";

import ModalCustom from "../componenets/ModalRegister";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

async function loginUser(credentials) {
  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LoginPage(props) {
  const [username, setUsername] = useState();

  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token.worked) {
      props.setToken(token);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <Card className="text-center" style={{ width: "20rem" }}>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Username</b>
            </Form.Label>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Joe Smith"
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
            {show ? (
              <p className="smallFont" style={{ color: "red" }}>
                The entered username or password is incorrect
              </p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>

              <Form.Control
                type="password"
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Button variant="success" onClick={handleSubmit}>
              Login
            </Button>
            <span> </span>
            <Button
              variant="primary"
              className="registerBtn"
              onClick={handleShow}
            >
              Register
            </Button>
          </Form.Group>
        </Card.Body>
      </Card>

      {showModal ? (
        <ModalCustom show={handleShow} onHide={handleClose} />
      ) : null}
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;
