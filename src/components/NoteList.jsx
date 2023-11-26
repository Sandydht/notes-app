import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, onActive }) {
  return (
    <div className='note-list'>
      {
        notes.map((note) => (
          <NoteItem 
            key={note.id} 
            {...note}
            onDelete={onDelete}
            onArchive={onArchive}
            onActive={onActive}
          />
        ))
      }
    </div>
  );
}

export default NoteList;