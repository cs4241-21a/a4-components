<script>
	const getExistingData = function () {
		const p = fetch("/all", {
			method: "POST",
			body: "",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				console.log(response);
				return response;
			});
		return p;
	};

	const update = function (event) {
		event.preventDefault();
		const row = event.composedPath()[2];
		console.log(row);
		const name = row.querySelector(".name");
		const dob = row.querySelector(".dob");
		const gender = row.querySelector(".gender");
		const json = {
			yourname: name.innerText,
			yourdob: dob.innerText,
			yourgender: gender.value,
			_id: row.id,
		};
		promise = fetch("/update", {
			method: "POST",
			body: JSON.stringify(json),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(function (response) {
			return response.json();
		});
	};

	const remove = function (event) {
		event.preventDefault();
		const row = event.composedPath()[2];
		console.log(row);
		const name = row.querySelector(".name");
		const dob = row.querySelector(".dob");
		const gender = row.querySelector(".gender");
		const json = {
			yourname: name.value,
			yourdob: dob.value,
			yourgender: gender.value,
			_id: row.id,
		};

		promise = fetch("/remove", {
			method: "POST",
			body: JSON.stringify(json),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(function (response) {
			return response.json();
		});
	};

	const add = function (event) {
		event.preventDefault();

		const name = document.querySelector("#yourname");
		const dob = document.querySelector("#yourbirthdate");
		const gender = document.querySelector("#yoursex");
		const json = {
			yourname: name.value,
			yourdob: dob.value,
			yourgender: gender.value,
		};
		promise = fetch("/add", {
			method: "POST",
			body: JSON.stringify(json),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(function (response) {
			return response.json();
		});
	};

	const signout = function (event) {
		event.preventDefault();

		fetch("/signout", {
			method: "POST",
			body: "",
		}).then(function (response) {
			console.log("logging out");
			location.replace("/login.html");
		});
		return false;
	};

	let promise = getExistingData();
</script>

<main>
	<div class="float-right">
		<button on:click={signout} id="signOut" class="btn btn-primary"
			>Sign Out</button
		>
	</div>
	<p id="intro" class="text-center">
		This site takes your name, date of birth and sex and calculates how far
		through the average lifespan (according to <a
			href="https://www.cdc.gov/nchs/data/vsrr/VSRR10-508.pdf">the CDC</a
		>) you are.
	</p>
	<p class="text-center" id="instructions">
		Enter your infromation below and click the "Add" button to see how far
		through your life you are.
	</p>
	<div class="text-center d-form justify-content-center form" id="addEntry">
		<form id="input" class="form-group">
			<label class="buttonLabel" for="yourname">Name</label>
			<input
				type="text"
				id="yourname"
				placeholder="Name"
				class="form-control"
			/>
			<label class="buttonLabel" for="yourbirthdate">Birthday</label>
			<input type="date" id="yourbirthdate" class="form-control" />
			<label class="buttonLabel" for="yoursex">Sex</label>
			<select name="sex" id="yoursex" class="form-control">
				<option value="Other">Other</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
			<div>
				<button on:click={add} id="add" class="btn btn-primary"
					>Add
				</button>
			</div>
		</form>
	</div>
	{#await promise then entries}
		{#if entries.length}
			<div>
				<table id="data" class="table table-bordered table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Birthday</th>
							<th>Sex</th>
							<th>Life Lived</th>
							<th colspan="2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each entries as entry}
							<tr id={entry._id}>
								<td contenteditable="true" class="name"
									>{entry.yourname}</td
								>
								<td contenteditable="true" class="dob"
									>{entry.yourdob}</td
								>
								<td>
									<select
										name="Gender"
										class="gender form-select"
									>
										{#if entry.yourgender === "Male"}
											<option value="Male" selected
												>Male</option
											>
										{:else}
											<option value="Male">Male</option>
										{/if}
										{#if entry.yourgender === "Female"}
											<option value="Female" selected
												>Female</option
											>
										{:else}
											<option value="Female"
												>Female</option
											>
										{/if}
										{#if entry.yourgender === "Other"}
											<option value="Other" selected
												>Other</option
											>
										{:else}
											<option value="Other">Other</option>
										{/if}
									</select>
								</td>
								<td>
									<p class="percent">{entry.percentDead}</p>
								</td>
								<td>
									<button on:click={update} class="update"
										>Update</button
									>
								</td>
								<td>
									<button on:click={remove} class="remove"
										>Remove</button
									>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	{/await}
</main>
