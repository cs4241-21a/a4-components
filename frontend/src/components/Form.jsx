import React from "react";
import { ThemeProvider, FormGroup, TextInput, ButtonPrimary, Heading } from '@primer/components'
import { postRequest } from "../requests-helper"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.fields
    if (this.state._id === undefined) {
      this.state = {
        item: "",
        when: "",
        where: "",
        description: "",
        photo: ""
      }
    }
  }

  componentWillReceiveProps(props) {
    let fields = props.fields
    if (fields._id === undefined) {
      fields = {
        item: "",
        when: "",
        where: "",
        description: "",
        photo: ""
      }
    }
    this.setState( fields )
  }

  confirmAction() {
    if(this.props.type === "edit") {
      postRequest('/api/update', this.state)
      .then(response => {
        this.props.handler()
        this.setState( {
          item: "",
          when: "",
          where: "",
          description: "",
          photo: ""
        })
      })
    } else if (this.props.type === "create") {
      postRequest('/api/create', this.state)
      .then(response => {
        this.props.handler()
        this.setState( {
          item: "",
          when: "",
          where: "",
          description: "",
          photo: ""
        })
      })  
    }
  }

  handleItem(e) {
    this.setState({item: e.target.value});
  }

  handleWhen(e) {
    this.setState({when: e.target.value});
  }

  handleWhere(e) {
    this.setState({where: e.target.value});
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
  }

  handlePhoto(e) {
    this.setState({photo: e.target.value});
  }

  render() {
    let { title } = this.props;
    return (
      <>
      <ThemeProvider>
          <FormGroup id="editform">
            <Heading as="h2">{title}</Heading>
            <FormGroup.Label htmlFor="item">*Item: </FormGroup.Label>
            <TextInput onChange={this.handleItem.bind(this)} value={this.state.item} type="text" placeholder="Apple Pen" />
            <FormGroup.Label htmlFor="when">*When: </FormGroup.Label>
            <TextInput onChange={this.handleWhen.bind(this)} value={this.state.when} type="date" />
            <FormGroup.Label htmlFor="where">*Where: </FormGroup.Label>
            <TextInput onChange={this.handleWhere.bind(this)} value={this.state.where} type="text" placeholder="FH 311" />
            <FormGroup.Label htmlFor="description">*Description: </FormGroup.Label>
            <TextInput onChange={this.handleDescription.bind(this)} value={this.state.description} type="text" placeholder="Color, brand..." />
            <FormGroup.Label htmlFor="photo">*Photo: </FormGroup.Label>    
            <TextInput onChange={this.handlePhoto.bind(this)} value={this.state.photo} type="url" name="photo" />
            <ButtonPrimary onClick={this.confirmAction.bind(this)}>Submit</ButtonPrimary>
          </FormGroup>
      </ThemeProvider>
      </>
    );
  }
}

export default Form;

