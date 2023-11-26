import React from 'react';
import { getInitialData } from '../utils/index';
import CreateNote from './CreateNote';
import SearchNotes from './SearchNotes';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div className='notes-app'>
        <CreateNote />
        <SearchNotes />
      </div>
    );
  }
}

export default NotesApp;
