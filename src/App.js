import React, { Component } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import ToDoItems from "./ToDoItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text != "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <ToDoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}

export default App;
