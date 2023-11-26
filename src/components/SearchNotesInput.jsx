import React from 'react';

class SearchNotesInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='search-notes-input'>
        <input type="search" placeholder='Judul catatan...' />
        <button type='submit'>Cari</button>
      </form>
    );
  }
}

export default SearchNotesInput;
