import React from "react";
import { ThemeProvider, FormGroup, TextInput, ButtonPrimary, Heading } from '@primer/components'

class EditLostFoundItem extends React.Component {
  render() {
    return (
      <>
      <ThemeProvider>
          <FormGroup id="editform">
            <Heading as="h2">Edit a Lost or Found item</Heading>
            <FormGroup.Label htmlFor="item-edit">*Item: </FormGroup.Label>
            <TextInput type="text" id="item-edit" placeholder="Apple Pen" />
            <FormGroup.Label htmlFor="when-edit">*When: </FormGroup.Label>
            <TextInput type="date" id="when-edit" />
            <FormGroup.Label htmlFor="where-edit">*Where: </FormGroup.Label>
            <TextInput type="text" id="where-edit" placeholder="FH 311" />
            <FormGroup.Label htmlFor="description-edit">*Description: </FormGroup.Label>
            <TextInput type="text" id="description-edit" placeholder="Color, brand..." />
            <FormGroup.Label htmlFor="photo-edit">*Photo: </FormGroup.Label>    
            <TextInput type="url" id="photo-edit" name="photo" />
            <ButtonPrimary id="editentry-button">Submit</ButtonPrimary>
          </FormGroup>
      </ThemeProvider>
      </>
    );
  }
}

export default EditLostFoundItem;

