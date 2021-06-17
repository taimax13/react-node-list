
import React from "react";
import "./App.css";
import AddNoteForm from "./components/AddNoteForm";
import NoteList from "./components/NoteList";
import { Temp } from "./components/Temp";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  handleAddNote(newNote) {
    this.setState((state) => {
      return { notes: [...this.state.notes, newNote] };
    });
  }

  handleRemoveNote(dateCreated) {
    this.setState((state) => {
      const filteredNotes = state.notes.filter(
        (notes) => notes.dateCreated !== dateCreated
      );
      return { notes: filteredNotes };
    });
  }

  render() {
    return (
      <div className="App">
        <AddNoteForm onAddNote={(newNote) => this.handleAddNote(newNote)} />
        <NoteList

          notes={this.state.notes}
          onRemoveNote={(dateCreated) => {
            this.handleRemoveNote(dateCreated);
          }}
        />
        {/* <Temp text={this.state.notes[this.state.notes.length - 1]?.noteText || 'Empty'}/> */}
      </div>
    );
  }
}

export default App;
