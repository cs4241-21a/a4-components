import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class AddRatingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.name,
            year: event.target.year,
            dorm: event.target.dorm,
            hall: event.target.hall,
            spot: event.target.spot,
            notes: event.target.notes
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const name = this.state.nameState;
        const studentYear = this.state.year;
        const favoriteDorm = this.state.dorm;
        const favoriteDining = this.state.hall;
        const favoriteSpot = this.state.spot;
        const notes = this.state.notes; //Can be blank

        if (name.trim() === '' || studentYear.trim() === '' || favoriteDorm.trim() === '' || favoriteDining.trim() === '' || favoriteSpot.trim() === '') {
            alert("To obtain accurate data, please be sure to respond to every question (except for additional notes)!")
            return false;
        } else {
            const jsonData = {
                username: this.props.username,
                name: name,
                studentYear: studentYear,
                favoriteDorm: favoriteDorm,
                favoriteDining: favoriteDining,
                favoriteSpot: favoriteSpot,
                notes: notes,
                yearsRemaining: ""
            }

            fetch('/submitTableData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonData)
            }).then(res => {
                return res.json();
            }).then(json => {
                console.log("Data uploaded successfully!")
            })
        }
    }

    render() {
        return (
            <Col>
                <h3>Add A New Rating (for you or a friend!):</h3>
                <Form onSubmit={this.handleSubmit}>

                <Form.Group class="mb-3">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control value={this.state.nameState} onChange={this.handleChange} type="text" />
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Which year are you?</Form.Label>
                        <Form.Select value={this.state.year} onChange={this.handleChange} aria-label="Select A Student Year">
                            <option value='First-Year'>First-Year</option>
                            <option value='Sophomore'>Sophomore</option>
                            <option value='Junior'>Junior</option>
                            <option value='Senior'>Senior</option>
                            <option value='Graduate'>Graduate Student</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite dorm?</Form.Label>
                        <Form.Select value={this.state.dorm} onChange={this.handleChange} aria-label="Select Your Favorite Dorm">
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
                        <Form.Select value={this.state.hall} onChange={this.handleChange} aria-label="Select Your Favorite Dining Hall">
                            <option value='Campus Center'>Campus Center</option>
                            <option value='DAKA (Morgan)'>DAKA (Morgan)</option>
                            <option value='Dunkin Donuts'>Dunkin Donuts</option>
                            <option value="Goat's Head">Goat's Head</option>
                            <option value='Starbucks'>Starbucks</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite spot on campus?</Form.Label>
                        <Form.Control value={this.state.spot} onChange={this.handleChange} type="text" />
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Do you have any additional notes?</Form.Label>
                        <Form.Control value={this.state.notes} onChange={this.handleChange} type="text" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Add This Rating!</Button>
                </Form>
            </Col>
        );
    }
}

export default AddRatingForm;