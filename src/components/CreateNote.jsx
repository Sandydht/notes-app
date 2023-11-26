import React from 'react';
import CreateNoteInput from './CreateNoteInput';

function CreateNote() {
  return (
    <div className='create-note'>
      <h2>Buat Catatan</h2>
      <CreateNoteInput />
    </div>
  );
}

export default CreateNote;
