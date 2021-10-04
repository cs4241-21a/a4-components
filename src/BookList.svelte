<script>
    import { shouldUpdateBooks } from "./store";

    export let onModifyBook;
    export let onDeleteBook;

    const isString = (val) => typeof val === "string" || val instanceof String;

    const tableColumns = {
        title: { name: "Title", isHeader: true },
        authors: {
            name: "Author(s)",
            formatter: (authors) => authors.join(", "),
        },
        num_pages: "# Pages",
        date_added: {
            name: "Date Added",
            formatter: (timestamp) =>
                new Date(timestamp).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                }),
        },
        rating: "Rating",
        location: "Location",
    };

    async function getBookData() {
        const res = await fetch("http://localhost:3000/me/books");
        const books = await res.json();
        rawBookData = books;

        return books.map(bookDataToTableRowData);
    }

    function bookDataToTableRowData(rowData) {
        let bookRow = { columns: [], id: rowData._id };
        Object.keys(tableColumns).forEach((columnKey) => {
            const columnData = tableColumns[columnKey];
            let columnValue = rowData[columnKey];
            if (columnData.formatter) {
                columnValue = columnData.formatter(columnValue);
            }

            let bookEntry = { isHeader: columnData.isHeader };

            bookEntry.text = columnData.text || columnValue;
            bookEntry.scope = columnData.isHeader ? "row" : null;

            bookRow.columns.push(bookEntry);
        });
        return bookRow;
    }

    let rawBookData;
    let bookData = getBookData();

    shouldUpdateBooks.subscribe((shouldUpdate) => {
        if (shouldUpdate) {
            bookData = getBookData();
            shouldUpdateBooks.set(false);
        }
    });
</script>

<div class="content">
    <div class="book-list container-lg">
        <div class="my-books-header">
            <h1 class="position-absolute start-50 translate-middle-x">
                My Books
            </h1>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-book-modal"
                id="add-book">+</button
            >
        </div>
        <table class="table" id="book-table">
            <thead>
                <tr>
                    {#each Object.keys(tableColumns) as columnKey}
                        {#if isString(tableColumns[columnKey])}
                            <th scope="col">{tableColumns[columnKey]}</th>
                        {:else}
                            <th scope="col">{tableColumns[columnKey].name}</th>
                        {/if}
                    {/each}
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {#await bookData then booksData}
                    {#each booksData as book, index}
                        <tr>
                            {#each book.columns as columnEntry}
                                {#if columnEntry.isHeader}
                                    <th scope={columnEntry.scope}
                                        >{columnEntry.text}</th
                                    >
                                {:else}
                                    <td>{columnEntry.text}</td>
                                {/if}
                            {/each}
                            <td>
                                <div class="dropdown">
                                    <a
                                        class="btn btn-secondary"
                                        href="#"
                                        role="button"
                                        id={`dropdownMenuLink${index}`}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        ...
                                    </a>

                                    <ul
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <li>
                                            <a
                                                class="btn btn-primary dropdown-item"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modify-book-modal"
                                                data-bs-book-id={book.id}
                                                href="#"
                                                on:click={() => {
                                                    const us = rawBookData.find(
                                                        (a) => a._id === book.id
                                                    );
                                                    onModifyBook({
                                                        id: book.id,
                                                        ...us,
                                                    });
                                                }}
                                            >
                                                Modify Entry</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="btn btn-primary dropdown-item"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete-book-modal"
                                                data-bs-book-id={book.id}
                                                href="#"
                                                on:click={(e) => {
                                                    const us = rawBookData.find(
                                                        (a) => a._id === book.id
                                                    );
                                                    onDeleteBook({
                                                        id: book.id,
                                                        ...us,
                                                    });
                                                }}
                                            >
                                                Delete Entry</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    {/each}
                {/await}
            </tbody>
        </table>
    </div>
</div>

<style>
    .my-books-header {
        position: relative;
        height: 4rem;
    }

    .my-books-header button {
        position: absolute;
        right: 0;
    }
</style>
