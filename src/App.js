import React, { Component } from "react";

import "./App.css";
import NoteEditor from "./components/note_editor";
import DisplayNotes from "./components/displayNotes";

class App extends Component {
  state = {
    notes: [],
    note: {
      title: "",
      description: ""
    }
  };
  onhandleChange = event => {
    const name = event.target.name;
    const note = { ...this.state.note };
    if (name === "title") {
      note.title = event.target.value;
      this.setState({ note });
    }
    if (name === "description") {
      note.description = event.target.value;
      this.setState({ note });
    }
  };
  onHandleSubmit = () => {
    const notes = [...this.state.notes, this.state.note];
    const note = {
      title: "",
      description: ""
    };
    this.setState({ notes, note });
  };
  onHandleEdit = note => {
    let notes = [...this.state.notes];
    let existingnote = { ...this.state.note };
    if (existingnote.title) {
      notes = [...notes, existingnote];
    }
    notes = notes.filter(e => e !== note);
    console.log(notes);
    // console.log(notes.splice(index, 1));
    this.setState({ notes, note });
  };
  onHandleDelete = note => {
    let notes = [...this.state.notes];
    notes = notes.filter(e => e !== note);
    this.setState({ notes });
  };
  render() {
    const { note, notes } = this.state;
    console.log(notes);
    return (
      <>
        <NoteEditor
          handleChange={this.onhandleChange}
          handleSubmit={this.onHandleSubmit}
          note={note}
        />
        <DisplayNotes
          notes={notes}
          handleEdit={this.onHandleEdit}
          handleDelete={this.onHandleDelete}
        />
      </>
    );
  }
}

export default App;
