import React from "react";
import { ThemeProvider, FormGroup, TextInput, ButtonPrimary, Heading } from '@primer/components'

class CreateLostFoundItem extends React.Component {
  render() {
    return (
      <>
      <ThemeProvider>
        <FormGroup id="createentry">
          <Heading as="h2">Post a new Lost or Found item</Heading>
          <button type="radio" name="type" value="lost" id="type1-create" checked />
          <FormGroup.Label htmlFor="type1-create">Lost</FormGroup.Label>
          <button type="radio" name="type" value="found" id="type2-create" />
          <FormGroup.Label htmlFor="type2-create">Found</FormGroup.Label>
          <FormGroup.Label htmlFor="item-create">*Item: </FormGroup.Label>
          <TextInput type="text" id="item-create" placeholder="Apple Pen" />
          <FormGroup.Label htmlFor="when-create">*When: </FormGroup.Label>
          <TextInput type="date" id="when-create" />
          <FormGroup.Label htmlFor="where-create">*Where: </FormGroup.Label>
          <TextInput type="text" id="where-create" placeholder="FH 311" />
          <FormGroup.Label htmlFor="description-create">*Description: </FormGroup.Label>
          <TextInput type="text" id="description-create" placeholder="Color, brand..." />
          <FormGroup.Label htmlFor="photo-create">*Photo: </FormGroup.Label>   
          <TextInput type="url" id="photo-create" name="photo" placeholder="google.com/photo.jpg" />
          <ButtonPrimary id="createentry-button">Submit</ButtonPrimary>
        </FormGroup>
      </ThemeProvider>
      </>
    );
  }
}

export default CreateLostFoundItem;

