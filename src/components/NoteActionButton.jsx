import React from 'react';

function NoteActionButton({ type, label, id, onclick }) {
  if (type === 'danger') {
    return <button 
      type='button' 
      className='note-item__button note-item__button__danger'
      onClick={() => onclick(id)}
    >{label}</button>;
  } else if (type === 'warning') {
    return <button 
      type='button' 
      className='note-item__button note-item__button__warning'
      onClick={() => onclick(id)}
    >{label}</button>;
  } else {
    return <button 
      type='button' 
      className='note-item__button note-item__button__success'
      onClick={() => onclick(id)}
    >{label}</button>;
  }
}

export default NoteActionButton;
