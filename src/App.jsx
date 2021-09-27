import React from "react";

class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <>
                <div className="grid left">
                    <div className="tableData">
                        <h1 id="head">A2 Submission for Matthew Malone</h1>
                        <h2 id="leftHeader">Census Data</h2>
                        <div>
                            <b id="counterText">Count:</b>
                            <b id="counter">(..)</b>
                        </div>

                        <table id="dataTable"></table>
                    </div>
                </div>
                <div className="grid right">
                    <div className="formData">
                        <h2 id="rightHeader">Add New Information</h2>
                        <form action="">
                            <label htmlFor='yourname'>Your Name: </label>
                            <input id='yourname' placeholder="Your name here" type='text'/><br/>
                            <label htmlFor='age'>Your Age: </label>
                            <input id='age' placeholder="Your age here" type='number'/><br/>
                            <label htmlFor='yourgender'>Your Gender: </label>
                            <select id='yourgender' name="gender">
                                <option disabled selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select><br/>
                        </form>
                        <button id="submit">Submit</button>
                        <h3 id="warning">&nbsp;</h3>
                    </div>
                </div>
            </>
        );
    }
    //Use custom hook script. This is react.
    componentDidMount() {
        const script = document.createElement("script")
        script.src = './src/scripts.js'
        script.async = true
        script.onload = () => console.log("scripts.js loaded asynchronously")
        document.body.appendChild(script)
    }
}

export default App;