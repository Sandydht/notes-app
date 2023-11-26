import React from 'react';
import SearchNotesInput from './SearchNotesInput';

function SearchNotes({ searchNote }) {
  return (
    <div className='search-notes'>
      <h2>Cari Catatan</h2>
      <SearchNotesInput searchNote={searchNote} />
    </div>
  );
}

export default SearchNotes;
