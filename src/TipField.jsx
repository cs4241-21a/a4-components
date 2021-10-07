import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TipGivenField extends React.Component{
    constructor(props){
        super(props)
        this.state = {input: ""}
        
    }

    getTip = e => {

        const {onNewTipInput} = this.props;
    
        // console.log("in getTip")
        // console.log("this.state.input, ", e.target.input)

        onNewTipInput(e.target.value)

    }

    render(){
        return(
            <>
                <input
                    id = "tip_input_field" 
                    class="form-control fs-5" 
                    type="text" 
                    id="tip_amount"
                    style={{textAlign: 'right'}}
                    data-type='currency' 
                    placeholder="$0.00"
                    onKeyUp={ (event) => this.handle_tip(event,"")}
                    onBlur={ (e) =>  this.handle_tip(e, "blur")}
                />
            </>
        )
    }

    handle_tip(event, blur){
        // console.log("input: ", event.target.value)
    
        if (blur === "blur"){
            // We are inside here because we deselected the amount due form
    
            //Lets make sure the input we gave is formatted (does it have 2 decimal places at the end?, ect)
            this.formatCurrency(event, blur)
    
            // Now lets calculate some suggested tips. Lets give it the input element containing the actual value and
            // which big whit box, it should be updating the percentages for
            // update_tip_suggestions(event, parent_container);
        }
        else{
    
            // We are currently typing inside of the amount due form, so lets make sure we don't
            // add any characters we shouldn't and make sure it is formatted properly.
            this.formatCurrency(event, "")
        }

        this.getTip(event)
    
        // let tip = tip_location.value;
    
    
        // Now that we have an amount, let's make sure that if we already had a tip input, the tip percentage of the total cost
        // will accurately be reflected.
        // calculate_tip_percentage(tip_location, parent_container);
    
    }
    

    formatCurrency(event, blur) {

        let input = event.target.value


        let input_val = ''

        //If there is no input value, the placeholder value will showup again
        if(input !== ''){
          input_val = '$' + input;
        //   console.log("Val: ", input_val)
        }
  
      
        // don't validate empty input
        if (input_val === "") { 
            return; 
        }
        
      
        // check for decimal
        if (input_val.indexOf(".") >= 0) {
      
          // get position of first decimal
          // this prevents multiple decimals from
          // being entered
          var decimal_pos = input_val.indexOf(".");
      
          // split number by decimal point
          var left_side = input_val.substring(0, decimal_pos);
          var right_side = input_val.substring(decimal_pos);
      
          // add commas to left side of number
          left_side = this.formatNumber(left_side);
      
          // validate right side
          right_side = this.formatNumber(right_side);
          
          // On blur make sure 2 numbers after decimal
          // blur means when you are not focused on the input form (the input is not selected)
          if (blur === "blur") {
            right_side += "00";
          }
          
          // Limit decimal to only 2 digits
          right_side = right_side.substring(0, 2);
      
          // join number by .
          input_val = "$" + left_side + "." + right_side;
      
        } else {
          // no decimal entered
          // add commas to number
          // remove all non-digits
          input_val = this.formatNumber(input_val);
          input_val = "$" + input_val;
          
          // final formatting
          if (blur === "blur") {
            input_val += ".00";
          }
        }

        // console.log("all good: ", input_val)
        event.target.value = input_val
      
        // // Updates the value that is inside of the form
        // this.setState({input: input_val})
      
      }

    formatNumber(n) {

        // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }



}

export default TipGivenField;