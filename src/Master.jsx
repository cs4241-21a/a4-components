import React from "react";
import ReactDOM from "react-dom";
import NewReceipt from "./NewReceipt";
import SavedReceipt from "./SavedReceipt";


var mountNewReceipt = document.getElementById("MainForm");
ReactDOM.render(<NewReceipt id={"0"}/>, mountNewReceipt);




// load in our data from the server
fetch( '/get_receipts', { 
    method:'post', 
    body: JSON.stringify({}), 
    headers:{
        "Content-Type":"application/json"
    }
})
.then( response => response.json() )
.then( json => {
    console.log("json: ", json)

    let index = 0

    for(index=0; index < json.length; index++){

        var mountSavedForms = document.getElementById("SavedForms");
        mountSavedForms.removeAttribute("id")

        let receipt = json[index]

        // let temp = document.createElement("div")

        // mountNewReceipt.insertBefore(mountSavedForms, temp)
            
        ReactDOM.render(<SavedReceipt
            id={receipt._id} 
            num_of_people={receipt.num_of_people}
            amount_due={receipt.amount_due}
            tip={receipt.tip}
            tip_percentage={receipt.tip_percentage}
            calc_1={receipt.calc_1}
            calc_2={receipt.calc_2}
            calc_3={receipt.calc_3}
            price_per_person={receipt.price_per_person}
        />, mountSavedForms)


    }

        
    

    

    
})
