import React from "react";


class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
    };
  }

  handleNoteChange(event) {
    this.setState((state) => ({
      noteText: event.target.value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const newNote = {
      noteText: this.state.noteText,
      dateCreated: Date.now(),
    };
    this.props.onAddNote(newNote);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <input
            type="text"
            placeholder="Your notes"
            className='node-input'
            name="noteText"
            id="noteText"
            value={this.state.noteText}
            onChange={(event) => this.handleNoteChange(event)}
          />
        </div>
            <div>
                <button onClick={(event)=>this.handleSubmit(event)} className='todo-app'>Add</button>
        </div>
      </form>
    );
  }
}

export default AddNoteForm;
