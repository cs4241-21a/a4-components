<script>
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
    const totP = document.querySelector( '#totP' ).value
          
          json = { totP: form1.totP.value, slicePer: form1.slicePer.value, gfP: form1.gfP.value, large: 0, medium: 0, small: 0, largeGf: 0, mediumGf: 0, smallGf: 0},
          
    promise = fetch('/add', {
      method:'POST',
      body: body,
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
  }
  
  let promise = getPizzas
</script>

<input type='text' id='totP' />
<input type='text' id='slicesPer' />
<input type='text' id='gfP' />
<button on:click={addPizzaOrder}>Submit</button>

{#await promise then pizzas}
  var pNoGf = pizza.totP - pizza.gfP; //people that aren't gf
  var totalSl = pizza.slicesPer * pNoGf; //total slices needed
  var totalGf = pizza.slicesPer * pizza.gfP; //total slices for gf
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
  <table>
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
{/awat}

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>