import { Modal } from "react-bootstrap";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import ContactsContext from "../store/website-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

function getAge(age) {
  if (age < 18 && age > 14) {
    return "Teenager";
  } else if (age < 18) {
    return "Child";
  } else if (age >= 18 && age <= 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

function getEducationValue(age, occupation) {
  if (occupation === "Unemployed") return " Never Attended";
  else if (age >= 22 && occupation !== "Student") {
    return "Graduate";
  } else if (age <= 14 && occupation === "Student") {
    return "Preschool";
  } else if (age > 14 && age < 18 && occupation === "Student")
    return "Highschool";
  else if (age > 18 && occupation === "Working") {
    return "Highschool Graduate";
  } else if (age > 22 && occupation === "Student") {
    return "Graduate Program";
  } else if (age >= 18 && occupation === "Student") {
    return "College";
  } else {
    return "Never Attended";
  }
}

async function update(credentials) {
  return fetch("/update", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

function ModalEdit(props) {
  const contactsContext = useContext(ContactsContext);

  let obj = contactsContext.getContactHandler(props.id);

  const [name, setName] = useState(obj.name);

  const [number, setNumber] = useState(obj.number);

  const [email, setEmail] = useState(obj.email);

  const [age, setAge] = useState(obj.age);

  const [occupation, setOccupation] = useState(obj.occupation);

  const [notes, setNotes] = useState(obj.notes);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      email === "" ||
      name === "" ||
      number === "" ||
      age === "" ||
      occupation === "Please Select Occupation" ||
      notes === ""
    ) {
      alert("Please fill in all field before submitting!");
    } else {
      const item = {
        _id: props.id,
        name: name,
        email: email,
        number: number,
        age: age,
        occupation: occupation,
        age_group: getAge(age),
        education_level: getEducationValue(age, occupation),
        notes: notes,
      };
      await update(item);

      props.onHide();
      contactsContext.editContactHandler(item);
    }
  };

  const handleRemoval = async (e) => {
    e.preventDefault();
    let confirmAction = window.confirm("Are you sure to delete this item?");
    if (confirmAction) {
      fetch("/delete", {
        method: "POST",
        body: JSON.stringify({ id: props.id }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function () {
        props.onHide();
        contactsContext.removeContactHandler(props.id);
      });
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
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>
            <b>Name</b>
          </Form.Label>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Joe Smith"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
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
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <b>Number</b>
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faPhone} />
            </InputGroup.Text>

            <Form.Control
              type="text"
              defaultValue={number}
              placeholder="312-325-6578"
              onChange={(e) => setNumber(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <b>Age</b>
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faCalendar} />
            </InputGroup.Text>

            <Form.Control
              type="number"
              placeholder="21"
              defaultValue={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <b>Occupation</b>
          </Form.Label>
          <Form.Select
            onChange={(e) => setOccupation(e.target.value)}
            aria-label="Default select example"
          >
            <option value={occupation}>Please Select New Occupation</option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
            <option value="Unemployed">Unemployed</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" onChange={(e) => setNotes(e.target.value)}>
          <Form.Label>
            <b>Notes</b>
          </Form.Label>
          <Form.Control defaultValue={notes} as="textarea" rows={3} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant="danger" onClick={handleRemoval}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit;
