<script>
	import { shouldUpdateBooks } from "../store.js";
	import { checkISBN } from "../isbnutil";

	async function apiAddBook(json) {
		console.log("adding book:");
		console.log(json);
		let res = await fetch("/addBook", {
			method: "POST",
			body: JSON.stringify(json),
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(res);
	}
	function handleAddBook(event) {
		let form = document.getElementById("add-book-form");
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			e.stopPropagation();
		});
		let formValues = {};
		form.querySelectorAll("input").forEach((input) => {
			const realId = input.id.split("-")[2];
			formValues[realId] = input.value;
		});

		if (!checkISBN(formValues["ISBN"])) {
			console.log("INVALID ISBN!");
			form.querySelector("#add-book-ISBN").setCustomValidity(
				"ISBN number invalid"
			);
			return;
		}

		apiAddBook(formValues)
			.then((res) => {
				shouldUpdateBooks.set(true);
				const addBookModal = bootstrap.Modal.getInstance(
					document.getElementById("add-book-modal")
				);
				addBookModal.hide();
			})
			.catch((err) => console.log(err));
	}
</script>

<div class="modal fade" id="add-book-modal" aria-hidden="true">
	<div class="modal-dialog">
		<form method="" id="add-book-form">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Book</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>
				<div class="modal-body">
					<div class="mb-3 row">
						<label for="ISBN" class="col-sm-2 col-form-label"
							>ISBN</label
						>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								id="add-book-ISBN"
								required
							/>
						</div>
					</div>
					<div class="mb-3 row">
						<label for="rating" class="col-sm-2 col-form-label"
							>Rating</label
						>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								id="add-book-rating"
							/>
						</div>
					</div>
					<div class="mb-3 row">
						<label for="location" class="col-sm-2 col-form-label"
							>Location</label
						>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								id="add-book-location"
							/>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal">Close</button
					>
					<button
						type="submit"
						on:click={handleAddBook}
						class="btn btn-primary">Add Book</button
					>
				</div>
			</div>
		</form>
	</div>
</div>
