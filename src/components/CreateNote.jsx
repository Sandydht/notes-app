import React from 'react';
import CreateNoteInput from './CreateNoteInput';

function CreateNote({ addNote }) {
  return (
    <div className='create-note'>
      <h2>Buat Catatan</h2>
      <CreateNoteInput addNote={addNote} />
    </div>
  );
}

export default CreateNote;
