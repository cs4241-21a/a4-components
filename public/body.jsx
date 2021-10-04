'use strict';
// import BookForm from './bookForm.jsx';

const e = React.createElement;

class Body extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { liked: false };
    }

    render() {
        // if (this.state.liked) {
        //     return 'You liked this.';
        // }

        // Display a "Like" <button>
        return (
            <div>
                <h1>Rate Your Books</h1>
                <br />
                <div className="enterForm">
                    <h2>Enter Your Book Below</h2>
                    <form>
                        <label htmlFor="ftitle">Title:</label>
                        <input type='text' id='ftitle' />
                        <label htmlFor="fauthor">Author (First Last):</label>
                        <input type='text' id='fauthor' />
                        <label htmlFor="fyear">Release Year:</label>
                        <input type='text' id='fyear' />
                        <label htmlFor="frating">Rating (1-5):</label>
                        <input type='text' id='frating' />
                        <button id="submit" onClick={submit}>Submit</button>
                    </form>
                </div>

                <h2>All Your Ratings</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Release Year</th>
                            <th>Rating</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

const domContainer = document.querySelector('#body_container');
ReactDOM.render(<Body />, domContainer);