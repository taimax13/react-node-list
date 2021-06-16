const NoteItem = ({ note, onRemove }) => (
  <div>
    <span>{note.noteText}</span>
    <button onClick={() => onRemove(note.dateCreated)}>Remove</button>
  </div>
);

export default NoteItem;
