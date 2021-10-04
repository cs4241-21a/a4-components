<script>
	const getEntries = function () {
		const p = fetch("/read", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				return json;
			});

		return p;
	};

	const addentry = function (e) {
		const entry = document.querySelector( '#yourname' ).value
		const ageVal = document.querySelector( '#yourage' ).value
		const scoreVal = document.querySelector( '#yourscore' ).value
		
    console.log("testadd")
    
		if(entry === ""){
          alert("Name cannot be empty!")
          return
        }
        if(ageVal < 0 || ageVal === ""){
          alert("Age must be greater than or equal to zero!")
          return
        }
        if(scoreVal === ""){
          alert("Score cannot be empty! Negative numbers are valid, though.")
          return
        }

		let proString;

		if(scoreVal >= 100){
			proString = ""
		}else{
			proString = "not "
		}

		promise = fetch("/add", {
			method: "POST",
			body: JSON.stringify({ name: entry, age: ageVal, score: scoreVal, pro: proString, completed: false }),
			headers: { "Content-Type": "application/json" },
		}).then((response) => response.json());
	};

	let promise = getEntries();
</script>

<main>
	<input type="text" id="yourname" placeholder="Name" />
	<input type="number" id="yourage" placeholder="Age" />
	<input type="number" id="yourscore" placeholder="Score" />
	<button on:click={addentry}>add user</button>
</main>

{#await promise then entries}
	<ul>
		{#each entries as entry}
			<li>
				{"User [" +
					entry.name +
					"] is [" +
					entry.age +
					"] years old, with a score of [" +
					entry.score +
					"] and as such is " +
					entry.pro +
					"a professional."}
			</li>
		{/each}
	</ul>
{/await}

<style>
</style>
