import React, { Component } from "react";

class ToDoItems extends Component {
  creatTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }
  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default ToDoItems;
