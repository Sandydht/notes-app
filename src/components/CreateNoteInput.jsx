import React from 'react';

class CreateNoteInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='create-note-input'>
        <div className='create-note-input__item'>
          <p className='create-note-input__validation-message'>Sisa karakter: 50</p>
          <input type="text" placeholder='Judul catatan...' />
        </div>
        <div className='create-note-input__item'>
          <textarea rows={15} placeholder='Tulis catatanmu disini...'></textarea>
        </div>
        <div className='create-note-input__item'>
          <button type='submit'>Buat</button>
        </div>
      </form>
    );
  }
}

export default CreateNoteInput;
