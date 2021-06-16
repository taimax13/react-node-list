import NoteItem from "./NoteItem";

function NoteList(props) { 
    return <div>
        {props.notes.map((note) => <NoteItem key={note.dateCreated} note={note} onRemove={props.onRemoveNote} />)}
    </div>;
}

export default NoteList;
