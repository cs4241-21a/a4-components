import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SavedReceipt extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            num_of_people: this.props.num_of_people,
            amount_due: this.props.amount_due,
            tip: this.props.tip,
            tip_percentage: this.props.tip_percentage,
            calc_1: this.props.calc_1,
            calc_2: this.props.calc_2,
            calc_3: this.props.calc_3
        }

        // console.log("props: ", this.state)
        // this.form = React.createRef()
        this.editing = this.editing.bind(this)
    }


    
    // our .render() method creates a block of HTML using the .jsx format
    render() {
        return  (
            <>
                <div id="SavedForms"> </div>
                <div id={this.state.id} class="shadow p-4 container mt-5" style={{width: '500px', height: '450px'}} >
                    <div class="row fs-4 mb-5">
                        <div class="col-sm">
                            <label for="people_input"> {this.props.num_of_people} people </label>
                        </div>
                        <div class="col-sm" style={{textAlign: 'right'}} onClick={this.editing}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                    </div>
                
                    <div class="row fs-4" style={{textAlign: 'center'}}>
                        <div class="col-sm">20%</div>
                        <div class="col-sm">17.5%</div>
                        <div class="col-sm">15%</div>
                    </div>
                    <div class="row fs-4 mb-1" style={{textAlign: 'center'}}>
                        <div class="col-sm"> {this.props.calc_1} </div>
                        <div class="col-sm"> {this.props.calc_2} </div>
                        <div class="col-sm"> {this.props.calc_3} </div>
                    </div>
                
                    <div class="row mt-5">
                        <div class="col-sm-8" style= {{textAlign: 'right', marginTop: 'auto', marginBottom: 'auto'}}>
                            <label class="fs-4"> Amount Due : </label>
                        </div>
                        <div class="col-sm-4">
                            <p class="fs-4" style={{margin: 'auto 0', textAlign: 'right', marginRight: '12px'}}> {this.props.amount_due} </p>
                        </div>
                    </div>
                    <div class="row mt-3 mb-2">
                        <div class="col-sm-8" style={{textAlign:'right', margin: 'auto 0'}}>
                            <label class="fs-4"> + Tip {this.props.tip_percentage} </label>
                        </div>
                        <div class="col-sm-4">
                            <p class="fs-4" style={{margin: 'auto 0', textAlign: 'right', marginRight: '12px'}} > {this.props.tip} </p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-8" style={{textAlign: 'right', margin: 'auto 0'}}>
                            <label class="fs-2">  Total / Person : </label>
                        </div>
                        <div class="col-sm-4">
                            <p class="fs-2" style= {{margin: 'auto 0', textAlign: 'right', marginRight: '12px'}}> {this.props.price_per_person} </p>
                        </div>
                    </div>
                </div>
            </>
      )}
  
  
    // call this method when the checkbox for this component is clicked
    // change(e) {
    //   this.props.onclick( this.props.name, e.target.checked )
    // }

    editing(event){
        console.log("target: ", this.state.id)



        // const data = JSON.stringify({"id" : id})

        // Tell the database to remove the entry
        fetch('/delete_receipt', {
            method: 'POST',
            body: JSON.stringify({"id" : this.state.id}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response) => {
            console.log(response.json())

            let item = document.getElementById(this.state.id)
            item.remove()
           
        })

        


    }
}

export default SavedReceipt;