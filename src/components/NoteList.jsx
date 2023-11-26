import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
  return (
    <div className='note-list'>
      {notes.map((note) => <NoteItem 
        key={note.id} 
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
        archived={note.archived}
      />)}
    </div>
  );
}

export default NoteList;