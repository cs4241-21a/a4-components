import React from 'react';

function TableDataItem(props) {
    //console.log("Our data are " + props.data);
    let rowData = props.data;
    //console.log("An example name is " + rowData.name);
    return (<tr>
        <td>{props.username}</td>
        <td>{rowData.name}</td>
        <td>{rowData.studentYear}</td>
        <td>{rowData.yearsRemaining}</td>
        <td>{rowData.favoriteDorm}</td>
        <td>{rowData.favoriteDining}</td>
        <td>{rowData.favoriteSpot}</td>
        <td>{rowData.notes}</td>
        </tr>);
}

export default TableDataItem;