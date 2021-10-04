import React from "react";
import {Link} from "react-router-dom";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { upcomingData: [], pastData: [] };
        this.load = this.load.bind(this);
        this.delFlight = this.delFlight.bind(this);
        this.submitAdd = this.submitAdd.bind(this);
        this.renderTable = this.renderTable.bind(this);
    }

    componentDidMount() {
        document.getElementById("submitButton").onclick = this.submitAdd;
        this.load();
    }

    load()  {
        fetch('/getUpcoming')
            .then(response => response.json())
            .then(data => {
                if (data.code === 403)
                    window.location.href = '/login';

                this.setState({upcomingData: data});
            });

        fetch('/getPast')
            .then(response => response.json())
            .then(data => {
                if (data.code === 403)
                    window.location.href = '/login';

                this.setState({pastData: data});
            });
    }

    submitAdd(e) {
        e.preventDefault();

        const desc = document.querySelector("#flightNum"),
            depAirport = document.querySelector("#depAirport"),
            arrAirport = document.querySelector("#arrAirport"),
            date = document.querySelector("#date");

        const json = {flightNum: desc.value, depAirport: depAirport.value, arrAirport: arrAirport.value, date: date.value};

        const _thisRef = this;

        fetch("/add", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        }).then(function (_) {
            _thisRef.load();
        });

        return false;
    };

    delFlight(id) {
        const json = {id: id};
        const _thisRef = this;

        fetch("/del", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        }).then(function (_) {
            _thisRef.load();
        });
    }

    loadModify(id) {
        const json = {id: id};

        fetch("/queryFlight", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        }).then(response => response.json())
            .then(data => {
                document.getElementById("boxTitle").innerText = "Edit Flight";
                document.getElementById("flightNum").value = data.result.flightNum;
                document.getElementById("depAirport").value = data.result.depAirport;
                document.getElementById("arrAirport").value = data.result.arrAirport;
                document.getElementById("date").value = data.result.date;
                document.getElementById("idToModify").value = id;
                document.getElementById("submitButton").onclick = this.submitModify;

                document.getElementById("flightNum").focus();
            });
    }

    submitModify(e) {

        e.preventDefault();

        const id = document.querySelector("#idToModify").value;

        const flightNum = document.querySelector("#flightNum"),
            depAirport = document.querySelector("#depAirport"),
            arrAirport = document.querySelector("#arrAirport"),
            date = document.querySelector("#date");

        const json = {id, flightNum: flightNum.value, depAirport: depAirport.value, arrAirport: arrAirport.value, date: date.value};

        fetch("/editFlight", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        }).then(function (_) {
            window.location.reload();
        });
    }

    renderTable(flight) {
        return (
            <tr>
                <td>{flight.flightNum}</td>
                <td>{flight.depAirport}</td>
                <td>{flight.arrAirport}</td>
                <td>{flight.date}</td>
                <td><Link onClick={(e) => {e.preventDefault(); this.loadModify(flight._id)}}>Edit</Link></td>
                <td><Link onClick={(e) => {e.preventDefault(); this.delFlight(flight._id)}}>Remove</Link></td>
            </tr>
        )
    }

    render() {
        const upcomingData = this.state.upcomingData.map(this.renderTable);
        const pastData = this.state.pastData.map(this.renderTable);

        return (
            <>
                <div className="boxHolder">
                    <div className="box">
                        <h1>Flight Reminder</h1>
                        <Link onClick={(e) => {e.preventDefault(); window.location.href = '/logout';}}>Logout</Link>
                    </div>
                </div>

                <div className="boxHolder">
                    <div className="box">
                        <form id="newTrip">
                            <h2 id="boxTitle">Add New Flight</h2>

                            <label htmlFor="flightNum">Flight Number: </label>
                            <input type="text" id="flightNum" placeholder="Flight Number"/>

                            <label htmlFor="depAirport">Departure Airprot: </label>
                            <input
                                type="text"
                                id="depAirport"
                                placeholder="City or specific location"
                            />

                            <label htmlFor="arrAirport">Arrival Airport: </label>
                            <input type="text" id="arrAirport" placeholder="Airport name"/>

                            <label htmlFor="date">Date: </label>
                            <input type="date" id="date" name="date" required/>

                            <input type="hidden" id="idToModify"/>

                            <button id="submitButton">Submit</button>
                        </form>
                    </div>
                </div>

                <h2>Upcoming Travel</h2>
                <div className="boxHolder">
                    <div className="box">
                        <table id="upcomingResult">
                            <thead>
                            <tr>
                                <th>Flight Number</th>
                                <th>Departure Airport</th>
                                <th>Arrival Airport</th>
                                <th>Date</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody id="upcomingData">
                            {upcomingData}
                            </tbody>
                        </table>
                    </div>
                </div>


                <h2>Past Travel</h2>
                <div className="boxHolder">
                    <div className="box">
                        <table id="pastResult">
                            <thead>
                            <tr>
                                <th>Flight Number</th>
                                <th>Departure Airport</th>
                                <th>Arrival Airport</th>
                                <th>Date</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody id="pastData">
                            {pastData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }

}
