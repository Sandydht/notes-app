import React from 'react';
import { showFormattedDate } from '../utils/index'
import NoteActionButton from './NoteActionButton';

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
  if (!archived) {
    return (
      <div className='note-item'>
        <div className='note-item__content'>
          <p className='note-item__title'>{title}</p>
          <p className='note-item__subtitle'>{showFormattedDate(createdAt)}</p>
          <p className='note-item__body'>{body}</p>
        </div>
        <div className='note-item__action'>
          <NoteActionButton 
            type='danger'
            label='Hapus'
            id={id}
            onclick={onDelete}
          />
          <NoteActionButton 
            type='warning'
            label='Arsipkan'
            id={id}
            onclick={onArchive}
          />
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
        <NoteActionButton 
          type='danger'
          label='Hapus'
          id={id}
          onclick={onDelete}
        />
        <NoteActionButton 
          type='success'
          label='Aktifkan'
          id={id}
          onclick={onActive}
        />
      </div>
    </div>
  );
}

export default NoteItem;
