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
import TableDataHeader from './Table/TableDataHeader';
import TableDataItem from './Table/TableDataItem';

class ResponsesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tableLoaded: true }
        this.redirectToEdit = this.redirectToEdit.bind(this)
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
                                <Button size="lg" variant="outline-dark" onClick={this.redirectToEdit}>Edit Your Ratings</Button>
                            </Col>
                            <Col>
                                <Button size="lg" variant="outline-dark" onClick={this.stepOnSeal}>Step On The Seal</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Table striped bordered responsive>
                        <thead>
                            <TableDataHeader />
                        </thead>
                        <tbody>
                            {this.props.data.map((item, index) => {
                                return (<TableDataItem
                                    data={this.props.data[index]}
                                    username={this.props.usernames[index]}
                                />);
                            })}
                        </tbody>
                    </Table>
                    <Image src="https://cdn.glitch.com/5786a749-abf3-443b-8bab-466af4fe7d5a%2FWPI_Quad.jpeg?v=1631079961919"
                        className="w-100 py-3" alt="WPI Quad" fluid />
                    <Container fluid className="header-footer-background py-3 text-center">
                        <Row>
                            <Col>
                                <h5><a className="link-dark"
                                    href="https://www.wpi.edu/sites/default/files/docs/Offices/Marketing-Communications/WPI_Institutional_9-4-12.pdf">WPI
                                    Logo Used With Permission</a></h5>
                            </Col>
                            <Col>
                                <h5><a className="link-dark" href="https://en.wikipedia.org/wiki/File:WPI_Quad.jpeg">WPI Quadrangle Used With Permission</a></h5>
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

    stepOnSeal() {
        //let table = document.getElementById("ratings");
        //updateTable();
        alert("You stepped on the seal! All undergraduate students now graduate 1 year later! (Coming soon!)");
    }

    redirectToEdit() {
       this.props.onClose();
    }
}

export default ResponsesPage;