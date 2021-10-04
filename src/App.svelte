<script>

const setError = function(message) {
  const msg = document.getElementById("err")
  msg.textContent = message;
}

const getTable = function() {
    const p = fetch( '/load', {
      method:'GET'
    })
    .then( response => response.json() )
    .then( json => {
      // console.log(json.rowData)
      return json.rowData
    })
    return p
}

const addRoll = function() {
	const input = document.getElementById("add"),
			json = {
					character: input.elements[0].value,
					diceType: input.elements[1].value,
					quantity: input.elements[2].value,
					modifier: input.elements[3].value
			},
			body = JSON.stringify(json);

	fetch("/add", {
			method: "POST",
			body
	}).then(function(response) {
			if (response.status === 200) {
					// console.log(body);
					promise = getTable()
					return true;
			} else {
					return response.text();
			}
	}).then(function(text) {
	    if(text === true) {
	      setError("");
	      return true;
	    }
	    else {
	      console.log("ERROR 2");
	      console.log(text);
	      setError(text);
	    }
  });
	return false;
}

const deleteRoll = function() {
    const input = document.getElementById("delete"),
        json = {
            id: input.elements[0].value,
            character: input.elements[1].value
        },
        body = JSON.stringify(json);

    fetch("/delete", {
        method: "POST",
        body
    }).then(function(response) {
        if (response.status === 200) {
            // console.log(body);
            promise = getTable();
            return true;
        } else {
            return response.text();
        }
    }).then(function(text) {
		    if(text === true) {
		      setError("");
		      return true;
		    }
		    else {
		      console.log("ERROR 2");
		      console.log(text);
		      setError(text);
		    }
	  });
    return false;
}

const clearRolls = function() {
    fetch("/clear", {
        method: "GET"
    }).then(function(response) {
        if (response.status === 200) {
            promise = getTable();
            return true;
        }
    });
    return false;
}

const sortRolls = function() {
    fetch("/sort", {
        method: "GET"
    }).then(function(response) {
        if (response.status === 200) {
            promise = getTable();
            return true;
        }
    });
    return false;
}

let promise = getTable()

</script>

<main>
<div>
	<body>
		<h1>Tyler's RPG Dice Roller</h1>

		<div id="grid">
			<div class="form_grid">
				<div class="form_box" id="add_box">
					<form class="forms" id="add" action="">
						<h3>Add a new roll</h3>
						<label for="Character">Character</label>
						<input type="text" id="character" required />
						<br /><br />
						<label for="Dice Type">Dice Type</label>
						<select name="dice" id="diceType">
							<option value="4">d4 (4-sided)</option>
							<option value="6">d6 (6-sided)</option>
							<option value="8">d8 (8-sided)</option>
							<option value="10">d10 (10-sided)</option>
							<option value="12">d12 (12-sided)</option>
							<option value="20" selected>d20 (20-sided)</option>
							<option value="100">d100 (100-sided)</option>
						</select>
						<br /><br />
						<label for="Quantity">Quantity</label>
						<input type="text" id="quantity" required />
						<!-- <br><br> -->
						<label for="Modifier">Modifier</label>
						<input type="text" id="modifier" required />
						<button class="b1" type="button" on:click={addRoll}>Add</button>
					</form>
				</div>

				<div class="line"></div>

				<div class="form_box" id="delete_box">
					<form class="forms" id="delete" actions="">
						<h3>Delete an existing roll</h3>
						<label for="ID">ID</label>
						<input type="text" id="id" />
						<br /><br />
						<label for="Character">Character</label>
						<input type="text" id="character" />
						<button class="b2" type="button" on:click={deleteRoll}>
							Delete
						</button>
						<br />
						<p>
							Note: The two boxes are each individual options. Specifying a
							value for both will result deletion via solely ID.
						</p>
					</form>
				</div>

				<div class="line"></div>

				<div class="form_box" id="button_box">
					<div class="buttonSpace">
						<h3>Other Options</h3>
						<button class="b3" type="button" on:click={clearRolls}>
							Clear
						</button>
						<button class="b3" type="button" on:click={sortRolls}>
							Sort by Name
						</button>
					</div>
					<h3>Error Messages</h3>
					<div class="error_box">
						<p id="err"></p>
					</div>
				</div>
			</div>

			<table class="table" id="table_list">
				<thead>
					<tr>
						<th>ID #</th>
						<th width="50%">Character</th>
						<th>Dice Type</th>
						<th>Quantity</th>
						<th>Modifier</th>
						<th>Result</th>
					</tr>
				</thead>

				{#await promise then rows}
					<tbody>
						{#each rows as row}
							<tr>
								<td>{row.id}</td>
								<td>{row.character}</td>
								<td>{row.diceType}</td>
								<td>{row.quantity}</td>
								<td>{row.modifier}</td>
								<td>{row.roll}</td>
							</tr>
						{/each}
					</tbody>
				{/await}
				</table>
		</div>
	</body>
</div>
</main>

<style>
	h1 {
	   font-family: 'Courier New', monospace;
	  text-align: center;
	}

	h3 {
	  text-align: center;
	}

	.form_grid {
	  width: 100%;
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	}

	.form_box {
	  position: relative;
	  height: 100%;
	  width: 32%;
	  border: 1px  solid white;
	  border-radius: 5px;

	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;

	  margin-left: 10px;
	  margin-right: 10px;
	  padding-left: 10px;
	  padding-right: 10px;

	  padding-bottom: 10px;
	}

	#grid {
	  position: relative;
	  width: 65%;
	  left: 50%;
	  transform: translate(-50%, 0%);
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  justify-content: center;
	}

	.table {
	  width: 100%;
	  margin-top: 20px;
	  border-collapse: collapse;
	  border: 1px solid black;
	}

	.table td, th {
	    text-align: center;
	    padding: 5px;
	    border-bottom: 1px solid black;
	    border-right: 1px solid black;
	}

	.table th {
	    background-color: #00223E;
	    color: lightgrey
	}

	.table tr {
	  background-color: #454450;
	  color: white;
	}

	input, select {
	  float: left;
	  clear: both;
	  margin-bottom: 5px;
	}

	.line {
	  border-left: 4px double white;
	  height: 100%;
	  top: 50%;
	}

	label {
	  float: left;
	  clear: both;
	}

	button {
	  width: 100%;
		height:auto;
	  transition-duration: 0.4s;
	  height: 30px;
	  display: table-cell;
	  align-self: flex-end;
	}

	.b3 {
	  margin-bottom: 10px;
	}

	.buttonSpace, form {
	  width: 100%;
	}

	.error_box {
	  align-self: flex-end;
	  text-align: center;
	  border: 1px solid red;
	  width: 100%;
	}

	#err {
		font-weight: bold;
	}

	.b1:hover {
	  background-color: #50614d; /* Green */
	  color: white;
	}

	.b2:hover {
	  background-color: #540e0a; /* Red */
	  color: white;
	}

	.b3:hover {
	  background-color: #0a3454; /* Blue */
	  color: white;
	}

</style>
