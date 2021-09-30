import React from "react";

class Calories extends React.Component{

    render(){
        return <h3>Total Calories of table: {this.props.value}</h3>
    }
}

export default Calories