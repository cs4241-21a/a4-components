import React from "./_snowpack/pkg/react.js";
import "./style.css.proxy.js";
class Book extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.title), /* @__PURE__ */ React.createElement("td", null, this.props.author), /* @__PURE__ */ React.createElement("td", null, this.props.score), /* @__PURE__ */ React.createElement("td", null, this.props.notes), /* @__PURE__ */ React.createElement("td", null, this.props.year));
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({books: json});
    });
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  handleAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    });
  };
  handleScoreChange = (e) => {
    this.setState({
      score: e.target.value
    });
  };
  handleNotesChange = (e) => {
    this.setState({
      notes: e.target.value
    });
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("h1", null, "Bookkeeper App"), /* @__PURE__ */ React.createElement("div", {
      class: "flex-container"
    }, /* @__PURE__ */ React.createElement("div", {
      style: {width: "60%"}
    }, /* @__PURE__ */ React.createElement("h2", null, "Books"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Title"), /* @__PURE__ */ React.createElement("th", null, "Author"), /* @__PURE__ */ React.createElement("th", null, "Score (1-5)"), /* @__PURE__ */ React.createElement("th", null, "Notes"), /* @__PURE__ */ React.createElement("th", null, "Year Read"), /* @__PURE__ */ React.createElement("th", null, "Edit"), /* @__PURE__ */ React.createElement("th", null, "Delete"))), /* @__PURE__ */ React.createElement("tbody", null, this.state.books.map((book, i) => /* @__PURE__ */ React.createElement(Book, {
      key: i,
      title: book.title,
      author: book.author,
      score: book.score,
      notes: book.notes,
      year: book.year
    }))))), /* @__PURE__ */ React.createElement("div", {
      style: {width: "40%"}
    }, /* @__PURE__ */ React.createElement("form", {
      autocomplete: "off",
      id: "form"
    }, /* @__PURE__ */ React.createElement("p", null, "Add Book"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      for: "title",
      class: "theLabels"
    }, "Title:", " "), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "title",
      placeholder: "Title",
      class: "theInputs",
      onChange: this.handleTitleChange
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      for: "author",
      class: "theLabels"
    }, "Author:", " "), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "author",
      placeholder: "Author",
      class: "theInputs",
      onChange: this.handleAuthorChange
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      for: "score",
      class: "theLabels"
    }, "Score (1-5):", " "), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      id: "score",
      placeholder: "Score",
      min: "1",
      max: "5",
      class: "theInputs",
      onChange: this.handleScoreChange
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      for: "notes",
      class: "theLabels"
    }, "Notes:", " "), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "notes",
      placeholder: "Notes",
      class: "theInputs",
      onChange: this.handleNotesChange
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.add(e)
    }, "Submit"))))));
  }
  add(evt) {
    const form = document.querySelector("form").value;
    console.log(evt);
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        score: this.state.score,
        notes: this.state.notes
      }),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      console.log(json);
      this.setState({books: json});
    });
  }
}
export default App;
