import React from 'react';

class SearchNotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => ({
      title: event.target.value
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.searchNote(this.state.title);
  }

  render() {
    return (
      <form className='search-notes-input' onSubmit={this.onSubmitEventHandler}>
        <input 
          type="search" 
          placeholder='Judul catatan...'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <button type='submit'>Cari</button>
      </form>
    );
  }
}

export default SearchNotesInput;
