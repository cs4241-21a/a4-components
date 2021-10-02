import React from "react";
import "./style.css";

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Book extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.score}</td>
        <td>{this.props.notes}</td>
        <td>{this.props.year}</td>
      </tr>
    );
  }
}

// main component
class App extends React.Component {
  constructor(props) {
    super(props);
    // initialize our state
    this.state = { books: [] };
    this.load();
  }

  // load in our data from the server
  load() {
    fetch("/read", { method: "get", "no-cors": true })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ books: json });
      });
  }

  handleTitleChange = e => {
    this.setState({
      title:e.target.value
    });
}

handleAuthorChange = e => {
  this.setState({
    author:e.target.value
  });
}

handleScoreChange = e => {
  this.setState({
    score:e.target.value
  }); }

  handleNotesChange = e => {
    this.setState({
      notes:e.target.value
    });
  }
  // render component HTML using JSX
  render() {
    return (
      <div className="App">
         <h1>Book Keeper App</h1>
        <div class="flex-container">
          <div style={{width: "60%" }}>
            <h2>Books</h2>
            <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score (1-5)</th>
              <th>Notes</th>
              <th>Year Read</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
            <tbody>
              {this.state.books.map((book, i) => (
                <Book
                  key={i}
                  title={book.title}
                  author={book.author}
                  score={book.score}
                  notes={book.notes}
                  year={book.year}
                />
              ))}
            </tbody>
            </table>
          </div>
          <div style={{ width: "40%" }}>
            <form autocomplete={"off"} id = "form">
              <h2>Add Book</h2>
              <div>
                <label for={"title"} class={"theLabels"}>
                  Title:{" "}
                </label>
                <input
                  type={"text"}
                  id={"title"}
                  placeholder={"Title"}
                  class={"theInputs"}
                  onChange={this.handleTitleChange}
                />
              </div>
              <div>
                <label for={"author"} class={"theLabels"}>
                  Author:{" "}
                </label>
                <input
                  type={"text"}
                  id={"author"}
                  placeholder={"Author"}
                  class={"theInputs"}
                  onChange={this.handleAuthorChange}
                />
              </div>
              <div>
                <label for={"score"} class={"theLabels"}>
                  Score (1-5):{" "}
                </label>
                <input
                  type={"number"}
                  id={"score"}
                  placeholder={"Score"}
                  min={"1"}
                  max={"5"}
                  class={"theInputs"}
                  onChange={this.handleScoreChange}
                />
              </div>
              <div>
                <label for={"notes"} class={"theLabels"}>
                  Notes:{" "}
                </label>
                <input
                  type={"text"}
                  id={"notes"}
                  placeholder={"Notes"}
                  class={"theInputs"}
                  onChange={this.handleNotesChange}
                />
              </div>

              <div>
                <button onClick={(e) => this.add(e)}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  add(evt) {
    const form = document.querySelector("form").value;
    console.log(evt)
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        score: this.state.score,
        notes: this.state.notes,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        // changing state triggers reactive behaviors
        console.log(json);
        this.setState({ books: json });
      });
  }
}

export default App;
