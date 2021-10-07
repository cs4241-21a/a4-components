import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class EditRatingForm extends React.Component {
    
    constructor(props) {
        super(props);

        if (this.props.feederData === undefined || this.props.feederData.length === 0) {
            console.log("ROW DATA UNDEFINED");
            this.state = {
                name: "",
                year: "First-Year",
                dorm: "Daniels Hall",
                hall: "Campus Center",
                spot: "",
                notes: "N/A"
            };
        } else {
            console.log("ROW DATA GOOD!!!");
            this.state = {
                name: this.props.feederData.name,
                year: this.props.feederData.studentYear,
                dorm: this.props.feederData.favoriteDorm,
                hall: this.props.feederData.favoriteDining,
                spot: this.props.feederData.favoriteSpot,
                notes: this.props.feederData.notes
            };
        }

        const name = this.state.name;
        const studentYear = this.state.year;
        const favoriteDorm = this.state.dorm;
        const favoriteDining = this.state.hall;
        const favoriteSpot = this.state.spot;
        const notes = this.state.notes; //Can be blank

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log("State change! Target is " + target + ", value is " + value + ", and name is " + name);

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.stayOnEdit();

        const name = this.state.name;
        const studentYear = this.state.year;
        const favoriteDorm = this.state.dorm;
        const favoriteDining = this.state.hall;
        const favoriteSpot = this.state.spot;
        const notes = this.state.notes; //Can be blank

        console.log("Our current name, for instance, is " + name);

        console.log("Within edit, submitting " + name + studentYear + favoriteDorm + favoriteDining + favoriteSpot + notes);
        console.log("Default row index is " + this.props.rowIndex);

        if (this.props.rowIndex === "") {
            alert("You must first select 'Edit This Row' on a row to edit its data!");
            return false;
        }

        if (name.trim() === '' || studentYear.trim() === '' || favoriteDorm.trim() === '' || favoriteDining.trim() === '' || favoriteSpot.trim() === '') {
            alert("To obtain accurate data, please be sure to respond to every question (except for additional notes)!")
            return false;
        } else {
            const jsonData = {
                index: this.props.rowIndex,
                username: this.props.username,
                name: name,
                studentYear: studentYear,
                favoriteDorm: favoriteDorm,
                favoriteDining: favoriteDining,
                favoriteSpot: favoriteSpot,
                notes: notes,
                yearsRemaining: ""
            }

            fetch('/editTableData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonData)
            }).then(res => {
                return res.json();
            }).then(json => {
                console.log("Data uploaded successfully!")
            })
            console.log("Refreshing to show new data!");
        }
    }

    render() {
        //let prefilled = this.props.formData;
        console.log("Our feeder data is " + this.props.feederData);
        console.log("Our default student dorm is " + this.props.feederData.favoriteDorm + ", reflected in state as " + this.state.dorm);
        /*if (this.props.feederData === undefined || this.props.feederData.length === 0) {
            this.props.feederData.name = "";
            this.props.feederData.studentYear = "First-Year";
            this.props.feederData.favoriteDorm = "Daniels Hall";
            this.props.feederData.favoriteDining = "Campus Center";
            this.props.feederData.favoriteSpot = "";
            this.props.feederData.notes = "";
        } */
        
        return (
            <Col>
                <h3>Edit a Row (click "Edit Row" above!):</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group class="mb-3">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control defaultValue={this.state.name} name="name" onChange={this.handleChange} type="text" />
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Which year are you?</Form.Label>
                        <Form.Select defaultValue={this.state.studentYear} name="year" onChange={this.handleChange} aria-label="Select A Student Year">
                            <option value='First-Year'>First-Year</option>
                            <option value='Sophomore'>Sophomore</option>
                            <option value='Junior'>Junior</option>
                            <option value='Senior'>Senior</option>
                            <option value='Graduate'>Graduate Student</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite dorm?</Form.Label>
                        <Form.Select defaultValue={this.state.favoriteDorm} name="dorm" onChange={this.handleChange} aria-label="Select Your Favorite Dorm">
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
                        <Form.Select defaultValue={this.state.favoriteDining} name="hall" onChange={this.handleChange} aria-label="Select Your Favorite Dining Hall">
                            <option value='Campus Center'>Campus Center</option>
                            <option value='DAKA (Morgan)'>DAKA (Morgan)</option>
                            <option value='Dunkin Donuts'>Dunkin Donuts</option>
                            <option value="Goat's Head">Goat's Head</option>
                            <option value='Starbucks'>Starbucks</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>What is your favorite spot on campus?</Form.Label>
                        <Form.Control defaultValue={this.state.favoriteSpot} name="spot" onChange={this.handleChange} type="text" />
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Do you have any additional notes?</Form.Label>
                        <Form.Control defaultValue={this.state.notes} name="notes" onChange={this.handleChange} type="text" />
                    </Form.Group>

                    <Button variant="danger" type="submit">Edit This Rating!</Button>
                </Form>
            </Col>
        );
    }
}

export default EditRatingForm;