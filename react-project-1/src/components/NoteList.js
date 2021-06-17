import { useState } from 'react';
import NoteItem from "./NoteItem";

function NoteList(props) {
    const [isReversed, setIsReversed] = useState();

    const reversedNotes = isReversed ? [...props.notes].reverse() : props.notes;

    return <div>
        <span>reversed</span><input type="checkbox" checked={isReversed} onChange={() => setIsReversed(!isReversed)} />
        {reversedNotes.map((note) => <NoteItem key={note.dateCreated} note={note} onRemove={props.onRemoveNote} />)}
    </div>;
}

export default NoteList;
