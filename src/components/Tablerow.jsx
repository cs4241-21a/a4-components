import React from "react";

class Tablerow extends React.Component{
    
    edit = () => this.props.edit(this.props.index)
    delete = () => this.props.delete(this.props.index)

    render(){
        return ( 
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.cal}</td>
            <td>{this.props.serv}</td>
            <td>{this.props.tcal}</td>
            <td><button onClick={this.edit}>Edit</button></td>
            <td><button onClick={this.delete}>Delete</button></td>
        </tr>
        );
    }
}

export default Tablerow