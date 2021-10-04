import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class EditRatingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        //let prefilled = this.props.formData;
        return (
            <Col>
                <h3>Edit a Row (click "Edit Row" above!):</h3>
                <Form>
                    <Form.Group class="mb-3">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>


                    <Form.Group class="mb-3">
                        <Form.Label>Which year are you?</Form.Label>
                        <Form.Select aria-label="Select A Student Year">
                            <option value='First-Year'>First-Year</option>
                            <option value='Sophomore'>Sophomore</option>
                            <option value='Junior'>Junior</option>
                            <option value='Senior'>Senior</option>
                            <option value='Graduate'>Graduate Student</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite dorm?</Form.Label>
                        <Form.Select aria-label="Select Your Favorite Dorm">
                            <option value='Daniels Hall'>Daniels Hall</option>
                            <option value='East Hall'>East Hall</option>
                            <option value='Ellsworth Apartments'>Ellsworth Apartments</option>
                            <option value='Faraday Hall'>Faraday Hall</option>
                            <option value='Founders Hall'>Founders Hall</option>
                            <option value='Fuller Apartments'>Fuller Apartments</option>
                            <option value='Hampton Inn'>Hampton Inn</option>
                            <option value='Institute Hall'>Institute Hall</option>
                            <option value='Messenger Hall'>Messenger Hall</option>
                            <option value='Morgan Hall'>Morgan Hall</option>
                            <option value='Riley Hall'>Riley Hall</option>
                            <option value='Stoddard Complex'>Stoddard Complex</option>
                            <option value='WPI Townhouses'>WPI Townhouses</option>
                            <option value='Other Housing'>Other Housing</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite dining hall?</Form.Label>
                        <Form.Select aria-label="Select Your Favorite Dining Hall">
                            <option value='Campus Center'>Campus Center</option>
                            <option value='DAKA (Morgan)'>DAKA (Morgan)</option>
                            <option value='Dunkin Donuts'>Dunkin Donuts</option>
                            <option value="Goat's Head">Goat's Head</option>
                            <option value='Starbucks'>Starbucks</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite spot on campus?</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Do you have any additional notes?</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Edit This Rating!</Button>
                </Form>
            </Col>
        );
    }
}

export default EditRatingForm;