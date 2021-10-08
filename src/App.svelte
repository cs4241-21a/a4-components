<link rel="stylesheet" href="https://unpkg.com/98.css" />

<script>
  let totP = 0
  let slicesPer = 0
  let gfP = 0
  const getPizzas = function(){
    const p = fetch('/read', {
      method: 'GET'
    })
    .then( response => response.json())
    .then( json => {
      console.log(json)
      return json
    })
    return p
  }
  
  const addPizzaOrder = function( e ){
     totP = document.querySelector( totP ).value
     slicesPer = document.querySelector( slicesPer ).value
     gfP = document.querySelector( gfP ).value
            
    var pNoGf = totP - gfP; //people that aren't gf
    var totalSl = slicesPer * pNoGf; //total slices needed
    var totalGf = slicesPer * gfP; //total slices for gf
    var large = 0;
    var medium = 0;
    var small = 0;
    var largeGf = 0;
    var mediumGf = 0;
    var smallGf = 0;
    while (totalSl > 6) {
          if (totalSl - 10 >= 0) {
            large++;
            totalSl -= 10;
          } else if (totalSl - 8 >= 0) {
            medium++;
            totalSl -= 8;
          } else {
            small++;
            totalSl -= 6;
          }
        }

        if (totalSl > 0 && totalSl <= 6) {
          small++;
        }

        while (totalGf > 6) {
          if (totalGf - 10 >= 0) {
            largeGf++;
            totalGf -= 10;
          } else if (totalGf - 8 >= 0) {
            mediumGf++;
            totalGf -= 8;
          } else {
            smallGf++;
            totalGf -= 6;
          }
        }

        if (totalGf > 0 && totalGf <= 6) {
          small++;
        }

  promise = fetch('/add', {
      method:'POST',
      body: { totP: totP, slicePer: slicesPer, gfP: gfP, large: large, medium: medium, small: small, largeGf: largeGf, mediumGf: mediumGf, smallGf: smallGf},
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
  }
  
  let promise = getPizzas
</script>

<div class="bigBox">
  <div class="header">
    <h1>Pizza Calculator</h1>
  </div>

  <div class="intro">
    <p>
      Welcome to the Post-COVID Pizza Party Planner (PCPPP for short)!
      COVD-19 has taken parties away for 2 years now leading to people
      <strong>forgetting</strong> how to throw an awesome pizza party. This website was designed so you don't have to stress about your lost
      knowledge! Just follow the instructions below and you'll be on your
      way to pizza party success!
    </p>
  </div>
  
  <div class="formAndInst">
    <input type='text' bind:value={totP} id='totP' />
    <label for="totP">Total People</label>
    <input type='text' bind:value={slicesPer} id='slicesPer' />
    <label for="slicesPer">Total People</label>
    <input type='text' bind:value={gfP} id='gfP' />
    <label for="gfP">Total People</label>
    <button on:click={addPizzaOrder} >Submit</button>
    <p class="instructions">
      All we need from you is how many people are coming, how many of those
      people are gluten free, and how many slices you want each person to
      have! From there we'll let you know how many small, mediums, and
      larges you'll need<span>&#42;</span> (including how many gf options
      you'll need available).
    </p>
  </div>
  
  <h2 class = "tableH">Pizza Party Log:</h2>

  <div class="footer">
    <p>
      <span>&#42;</span>This goes off the assumption that where you order
      from has 8-10" smalls, 12" mediums, and 14" larges. The PCPPP is not
      responsible for any pizza party mishaps that come from ordering
      different sized pizzas.
    </p>
  </div>  
      
</div>

{#await promise then pizzas}  

  <table id="t1">
  <th>Total People</th>
  <th>Slices Per Person</th>
  <th>Total gf People</th>
  <th>Total Large</th>
  <th>Total Meduim</th>
  <th>Total Small</th>
  <th>Total gf Large</th>
  <th>Total gf Meduim</th>
  <th>Total gf Small</th>
  {#each pizzas as pizza}
    <td>{pizza.totP} : <input type='text' totP={pizza.totP}></td>
    <td>{pizza.slicesPer} : <input type='text' slicesPer={pizza.slicesPer}></td>
    <td>{pizza.gfP} : <input type='text' gfP={pizza.gfP}></td>
    <td>{large} : large</td>
    <td>{medium} : medium</td>
    <td>{small} : small</td>
    <td>{largeGf} : largeGf</td>
    <td>{mediumGf} : mediumGf</td>
    <td>{smallGf} : smallGf</td>
  {/each}
  </table>
{/await}

<style>
	body {
    margin: auto;
    background-color: #fdffff;
  }
  
  .bigBox {
    display: flex;
    flex-flow: row wrap;
  }
  
  .bigBox > * {
    flex: 1 100%;
  }
  
  .bigBox > div {
    margin: 1em;
  }
  
  .header {
    font-size: 70px;
    text-align: center;
    margin: auto;
    font-family: "Bungee Shade", cursive;
    color: #010081;
    text-decoration-line: underline;
    text-decoration-style: double;
    text-decoration-color: #008080;
  }
  
  
  .intro {
    display: flex;
    font-family: Sans-Serif;
    font-size: 24px;
    justify-items: center;
    flex-direction: column;
  }
  
  label{
    margin-bottom: 3.5px;
  }
  
  strong {
    color: #ff0081;
  }
  
  .formAndInst {
    display: flex;
    font-family: Sans-Serif;
    font-size: 20px;
    align-items: center;
  }
  
  .formAndInst p {
    margin-left: 50px;
    ont-family: Sans-Serif;
    font-size: 24px;
  }
  
  table, th, td {
    border: 1px solid black;
    font-family: Sans-Serif;
    background-color: #c3c3c3;
  }
  
  th{
    background-color: #fdffff;
  }
  
  .tableH {
    flex-grow: 4;
    font-size: 70px;
    text-align: center;
    margin: auto;
    font-family: "Bungee Shade", cursive;
    color: #010081;
    text-decoration-line: underline;
    text-decoration-style: double;
    text-decoration-color: #008080;
  }
  
  input[type="text"] {
    border: 1px solid #555;
    outline: none;
  }
  
  input[type="text"]:focus {
    background-color: #c3c3c3;
    border: 1px solid black;
  }
  
  .formBoxes {
    display: flex;
    flex-direction: column;
  }
  
  .formBoxes > input {
    margin: 2px;
  }
  
  button {
    font-family: Sans-Serif;
    border: 1px solid black;
    background-color: #BFCAD6;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #9FA9B3;
  }
  
  .footer {
    font-size: 8px;
  }
  
  @media all and (max-width: 600px) {
    .formAndInst {
      flex-direction: column;
    }
  
    .formAndInst p {
      margin-left: 1em;
    }
  
    .header img {
      width: 100px;
      height: 150px;
    }
  }
  
  @media all and (min-width: 1000px) {
    .intro p {
      margin-left: 100px;
      margin-right: 100px;
    }
  
    .formAndInst p {
      margin-right: 100px;
    }
  
    .formBoxes {
      margin-left: 100px;
    }
  }
  
  @media all and (min-width: 1250px) {
    .intro p {
      margin-left: 200px;
      margin-right: 200px;
    }
  
    .formAndInst p {
      margin-right: 200px;
    }
  
    .formBoxes {
      margin-left: 200px;
    }
  }
  
  @media all and (min-width: 1500px) {
    .intro p {
      margin-left: 300px;
      margin-right: 300px;
    }
  
    .formAndInst p {
      margin-right: 300px;
    }
  
    .formBoxes {
      margin-left: 300px;
    }
  }
</style>