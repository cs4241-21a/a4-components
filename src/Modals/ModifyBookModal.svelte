<script>
    import { shouldUpdateBooks } from "../store.js";
    import { checkISBN } from "../isbnutil";

    export let book = { title: "", isnb: "", rating: "", location: "" };

    function modifyBookEntry(entry_id) {
        let form = document.getElementById("modify-book-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        let formValues = { _id: book.id };

        form.querySelectorAll("input").forEach((input) => {
            console.log("input:", input);
            formValues[input.id.split("-")[2]] = input.value;
        });

        if (!checkISBN(formValues["ISBN"])) {
            console.log("INVALID ISBN!");
            console.log(form.querySelector("#modify-book-ISBN"));
            form.querySelector("#modify-book-ISBN").setCustomValidity(
                "ISBN number invalid"
            );
            return;
        } else {
            console.log("valid ISBN!");
        }

        fetch("/modifyBook", {
            method: "PUT",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            console.log("response:", response.json());
            shouldUpdateBooks.set(true);
            const modifyBookModal = bootstrap.Modal.getInstance(
                document.getElementById("modify-book-modal")
            );
            modifyBookModal.hide();
        });
    }
</script>

<!-- modify book modal -->
<div class="modal fade" id="modify-book-modal" aria-hidden="true">
    <div class="modal-dialog">
        <form method="" id="modify-book-form">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Modify {book.title ?? "book"}
                    </h5>
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
                                id="modify-book-ISBN"
                                bind:value={book.isbn}
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
                                id="modify-book-rating"
                                bind:value={book.rating}
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
                                id="modify-book-location"
                                bind:value={book.location}
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
                        class="btn btn-primary book-modify-button"
                        on:click={modifyBookEntry}>Save changes</button
                    >
                </div>
            </div>
        </form>
    </div>
</div>
