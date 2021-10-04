<script>
    import { shouldUpdateBooks } from "../store.js";
    export let bookId;
    export let bookTitle = "";

    function deleteBook(event) {
        fetch("/deleteBook", {
            method: "DELETE",
            body: JSON.stringify({ _id: bookId }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            console.log("response:", response.json());
            shouldUpdateBooks.set(true);
            const deleteBookModal = bootstrap.Modal.getInstance(
                document.getElementById("delete-book-modal")
            );
            deleteBookModal.hide();
        });
    }
</script>

<div class="modal fade" id="delete-book-modal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Delete {bookTitle}
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                Are you sure you want to delete {bookTitle}?
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal">Close</button
                >
                <button
                    type="button"
                    class="btn btn-danger book-deletion-button"
                    on:click={deleteBook}>Delete</button
                >
            </div>
        </div>
    </div>
</div>
