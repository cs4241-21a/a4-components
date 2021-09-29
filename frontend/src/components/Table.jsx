import React from "react";
import { Heading, ThemeProvider, Button, Spinner } from '@primer/components'
import { getRequest, postRequest } from "../requests-helper"

class Table extends React.Component {
  constructor(props) {
    super(props)
    let { title, endpoint } = this.props;
    this.state = { collection: [], title, endpoint }
  }

  componentDidMount() {
    this.loadCollection()
  }

  onEdit(e) {
    let id = e.target.parentElement.parentElement.id
    console.log("Edit pressed for " + id)
    // this.props.onChange(e.target)
  }

  async onDelete(e) {
    let id = e.target.parentElement.parentElement.id
    console.log("Delete pressed for " + id)
    postRequest('/api/delete', { _id: id })
    .then(res => this.loadCollection())
  }

  loadCollection() {
    getRequest('/api/' + this.state.endpoint, {}, (data) => {
      this.setState({ collection : data })
    })
  }  

  computeRows() {
    var tbody = [];
    for (let info of this.state.collection) {
      let row = []
      row.push(<td>{info.item}</td>)
      row.push(<td>{info.when}</td>)
      row.push(<td>{info.where}</td>)
      row.push(<td>{info.description}</td>)
      row.push(<td>{info.photo}</td>)
      row.push(<td>{info.emailme}</td>)
      row.push(<td>{info.created} days ago</td>)
      if (true || info.permissions === 'write') {
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
