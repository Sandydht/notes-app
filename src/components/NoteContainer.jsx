import React from 'react';
import NoteList from './NoteList';

function NoteContainer({ titleContainer, notes, onDelete, onArchive, onActive }) {
  if (!notes || Array.isArray(notes) && notes.length < 1) {
    return (
      <div className='note-container'>
        <h2>{titleContainer}</h2>
        <p className='note-container__empty-message'>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <div className='note-container'>
      <h2>{titleContainer}</h2>
      <NoteList 
        notes={notes} 
        onDelete={onDelete}
        onArchive={onArchive}
        onActive={onActive}
      />
    </div>
  );
}

export default NoteContainer;
