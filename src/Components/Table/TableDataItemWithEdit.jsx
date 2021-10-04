import { data } from 'jquery';
import React from 'react';

class TableDataItemWithEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        //console.log("Our data are " + props.data);
        console.log("Userusername is " + this.props.userUsername + " and datausername is " + this.props.dataUsername)
        //console.log("An example name is " + rowData.name);
    }

    render() {
        let rowData = this.props.data;
        if (this.props.dataUsername === this.props.userUsername) {
            return (<tr>
                <td>{this.props.userUsername}</td>
                <td>{rowData.name}</td>
                <td>{rowData.studentYear}</td>
                <td>{rowData.yearsRemaining}</td>
                <td>{rowData.favoriteDorm}</td>
                <td>{rowData.favoriteDining}</td>
                <td>{rowData.favoriteSpot}</td>
                <td>{rowData.notes}</td>
                <td><button class="btn btn-dark" onClick={this.editRow}>Edit This Row</button></td>
                <td><button class="btn btn-dark" onClick={this.props.deleteRow}>Delete This Row</button></td>
            </tr>);
        } else {
            return <td></td>
        }
    }

    editRow() {

    }
}

export default TableDataItemWithEdit;