
import React from "react";
import TodoForm from "./reactForm";
import ReactTable from "./reactTable";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoForm/>
        <ReactTable/>
      </div>
    );
  }
}

export default App;
