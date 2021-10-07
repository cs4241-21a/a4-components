import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PeopleDropDown extends React.Component{
    constructor(props){
        super(props)

        this.state = {num_of_people: "1"}
        this.getPeopleValue = this.getPeopleValue.bind(this)
    }
    getPeopleValue = e => {

        this.setState({num_of_people: e.target.value})

        const {onNewSelection} = this.props;
    
        // console.log("in getPeopleValue")
        // console.log("target value: ", e.target.value)
        onNewSelection(e.target.value)

    }

    resetState(){
        this.setState({num_of_people: "1"})
    }

    render(){
        return(
            <select id="people_input" class="form-control" value={this.state.num_of_people} style={{width: 'fit-content', textAlign: 'center'}} onChange={this.getPeopleValue}>
                <option selected> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
            </select>
        )
    }
}

export default PeopleDropDown;