import { Modal } from "react-bootstrap";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

async function registerUser(credentials) {
  return fetch("/createAccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function ModalRegister(props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email === "" || username === "" || password === "") {
      alert("Please fill in all field before submitting!");
    } else {
      const token = await registerUser({
        username,
        email,
        password,
      });
      if (token.worked) {
        props.onHide();
      } else {
        setShow(true);
      }
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Account Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <b>Email</b>
          </Form.Label>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faEnvelope} />
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="jsmith@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRegister;
