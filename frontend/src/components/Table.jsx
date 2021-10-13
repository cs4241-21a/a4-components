import React from "react";
import { Heading, ThemeProvider, Button } from '@primer/components'
import { getRequest, postRequest } from "../requests-helper"

class Table extends React.Component {
  constructor(props) {
    super(props)
  }

  onEdit(e) {
    let id = e.target.parentElement.parentElement.id
    console.log("Edit pressed for " + id)
    let obj = this.props.collection.find( x => x._id === id)
    this.props.editHandler(obj)
  }

  onDelete(e) {
    let id = e.target.parentElement.parentElement.id
    console.log("Delete pressed for " + id)
    postRequest('/api/delete', { _id: id })
    .then(this.props.deleteHandler)
  }

  computeRows() {
    var tbody = [];
    for (let info of this.props.collection) {
      let row = []
      row.push(<td>{info.item}</td>)
      row.push(<td>{info.when}</td>)
      row.push(<td>{info.where}</td>)
      row.push(<td>{info.description}</td>)
      row.push(<td>{info.photo}</td>)
      row.push(<td>{info.emailme}</td>)
      row.push(<td>{info.created} days ago</td>)
      if (info.permissions === 'write') {
        row.push(<td><Button onClick={ this.onDelete.bind(this) }>Delete</Button><Button onClick={ this.onEdit.bind(this) }>Edit</Button></td>)
      }
      tbody.push(<tr key={info._id} id={info._id}>{row}</tr>)
    }
    return tbody;
  }

  render() {
    let rows = this.computeRows()
    let { title, endpoint } = this.props;
    return (
        <>
        <ThemeProvider>
          <Heading as="h2">{ title }</Heading>
          <table id={ endpoint }>
            <thead>
              <tr>
                <th>Item</th>
                <th>When</th>
                <th>Where</th>
                <th>Description</th>
                <th>Photo Link</th>
                <th>Email me!</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </table>      
        </ThemeProvider>
        </>
    );
  }}

export default Table;
