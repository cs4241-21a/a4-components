<script>
	import Header from "./Header.svelte";
	import BookList from "./BookList.svelte";
	import AddBookModal from "./Modals/AddBookModal.svelte";
	import ModifyBookModal from "./Modals/ModifyBookModal.svelte";
	import DeleteBookModal from "./Modals/DeleteBookModal.svelte";

	let modBook;
	let delId, delTitle;
	let onModifyBook = (book) => {
		modBook = book;
	};
	let onDeleteBook = (book) => {
		delId = book.id;
		delTitle = book.title;
	};
</script>

<Header />
<BookList {onModifyBook} {onDeleteBook} />

<AddBookModal />
<ModifyBookModal book={modBook} />
<DeleteBookModal bookId={delId} bookTitle={delTitle} />

<style>
</style>
