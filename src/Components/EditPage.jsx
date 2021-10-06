import React from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import "../styles.css";
import TableDataHeaderWithEdit from './Table/TableDataHeaderWithEdit';
import TableDataItemWithEdit from './Table/TableDataItemWithEdit';
import AddRatingForm from './Forms/AddRatingForm';
import EditRatingForm from './Forms/EditRatingForm';
import { Form } from 'react-bootstrap';

class EditPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tableLoaded: true }
        this.redirectToResponses = this.redirectToResponses.bind(this)
        this.stayOnEdit = this.stayOnEdit.bind(this)
        this.signOut = this.signOut.bind(this)
        this.currentIndex = -1;

        this.currentEditData = false;
    }

    render() {
        let waitingForTable = false;
        if (this.state.tableLoaded) {
            waitingForTable = (
                <>
                    <Container className="header-footer-background text-center p-3" fluid>
                        <Row>
                            <Col>
                                <Image src="https://cdn.glitch.com/c2c9492b-2ab1-4df2-b027-f9c1281d4de7%2FPikPng.com_wpi-logo-png_3464524.png?v=1632623944035"
                                    className="wpi-logo" alt="WPI Logo" fluid />
                                <h1 class="text-center">Student Preferences</h1>
                            </Col>
                            <Col>
                                <h2>Welcome to WPI's <i>unofficial</i> dorm, dining hall, and campus location comparison tool!</h2>
                            </Col>
                            <Col>
                                <h2>Check how students have rated your favorite spots on campus and add your own ratings!</h2>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="responses-background text-center p-3" fluid>
                        <Row className="py-3">
                            <Col>
                                <Button size="lg" variant="outline-dark" onClick={this.redirectToResponses}>View Other Responses</Button>
                            </Col>
                            <Col>
                                <Button size="lg" variant="outline-dark" onClick={this.signOut}>Sign Out</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Table striped bordered responsive>
                        <thead>
                            <TableDataHeaderWithEdit />
                        </thead>
                        <tbody>
                            {this.props.data.map((item, index) => {
                                return (<TableDataItemWithEdit
                                    refreshPage={this.refresh}
                                    deleteRow={this.refresh}
                                    data={this.props.data[index]}
                                    index={index}
                                    dataUsername={this.props.usernames[index]}
                                    userUsername={this.props.username}
                                />);
                            })};
                        </tbody>
                    </Table>

                    <>
                        <Container fluid className="responses-background p-3">
                            <Container className="py-3">
                                <Row className="text-center">
                                    <Col>
                                        <AddRatingForm stayOnEdit={this.stayOnEdit} username={this.props.username} />
                                    </Col>
                                    <Col>
                                        <EditRatingForm />
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </>);

                    <Container fluid className="header-footer-background py-3 text-center">
                        <Row>
                            <Col>
                                <h3>Don't want to add a new rating or edit a current one? Check out how other students responded here!</h3>
                                <Button size="lg" variant="outline-dark" onClick={this.redirectToResponses}>View Current Responses</Button>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        } else {
            waitingForTable = <h1>Loading database...</h1>;
        }
        return waitingForTable;
    }

    stayOnEdit() {
        //this.setState(this.state);
        console.log("Updating!");
        this.props.waitAndUpdate();
        //Link to a function pulling ratings from database, update state automatically 
    }

    organizeDataRow() {
        console.log("Our data looks like " + this.props.data);
        let countPerPerson = 0;
        let previousUsername = "";

        this.props.data.map((item, index) => {
            /*if (this.props.usernames[index] != previousUsername) {
                countPerPerson = 0;
                previousUsername = this.props.usernames[index];
            } else {
                countPerPerson++;
            } */
            return (<TableDataItemWithEdit
                refreshPage={this.refresh}
                deleteRow={this.refresh}
                data={this.props.data[index]}
                index={index}
                dataUsername={this.props.usernames[index]}
                userUsername={this.props.username}
            />);
        });
    }

    redirectToResponses() {
        this.props.onResponses();
    }

    signOut() {
        this.props.signOut();
        console.log("Signing out?");
    }

    editRow(rowIndex) {
    }
}

export default EditPage;