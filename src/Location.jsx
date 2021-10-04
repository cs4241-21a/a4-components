import React from "react";

class Location extends React.Component {


    constructor(props) {
        super(props)


    }
    calcRating(cost, priority) {
      return (priority - cost + 10) / 2;
    }
  
  render() {
    return (
      <>
        <tr>
          <td>
            <input ref={this.locationInput} id= {"location"+ this.props.i} defaultValue={this.props.location} />
          </td>
          <td>
          <input ref={this.costInput} type="number" id= {"cost"+ this.props.i} defaultValue={this.props.cost} />
          </td>
          <td>
          <input ref={this.priorityInput} type="number" id= {"priority"+ this.props.i} defaultValue={this.props.priority} />
          </td>
          <td>{this.props.rating}</td>
          <td>
          <input ref={this.checkbox} type="checkbox" id= {"visited"+ this.props.i} defaultChecked={this.props.visited} />

          </td>
          <td>
            <button class="update-button" onClick={e => this.props.update(e,this.props.i,this.props.id)}>Update</button>
          </td>
          <td>
            <button class ="delete-button" onClick={e => this.props.delete(e,this.props.id)}>Delete</button>
          </td>
        </tr>
      </>
    );
  }

 
}

export default Location;
