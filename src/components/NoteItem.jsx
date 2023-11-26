import React from 'react';
import { showFormattedDate } from '../utils/index'

function NoteItem({ title, createdAt, body, archived }) {
  if (!archived) {
    return (
      <div className='note-item'>
        <div className='note-item__content'>
          <p className='note-item__title'>{title}</p>
          <p className='note-item__subtitle'>{showFormattedDate(createdAt)}</p>
          <p className='note-item__body'>{body}</p>
        </div>
        <div className='note-item__action'>
          <button type='button' className='note-item__button'>Hapus</button>
          <button type='button' className='note-item__button'>Arsipkan</button>
        </div>
      </div>
    );
  }

  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <p className='note-item__title'>{title}</p>
        <p className='note-item__subtitle'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <button type='button' className='note-item__button'>Hapus</button>
        <button type='button' className='note-item__button'>Aktifkan</button>
      </div>
    </div>
  );
}

export default NoteItem;
