import React from 'react';
import { getInitialData } from '../utils/index';
import CreateNote from './CreateNote';
import SearchNotes from './SearchNotes';
import NoteContainer from './NoteContainer';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
    this.onActiveNoteEventHandler = this.onActiveNoteEventHandler.bind(this);
    this.filterActiveNotes = this.filterActiveNotes.bind(this);
    this.filterArchiveNotes = this.filterArchiveNotes.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          } 
        ]
      };
    });

    this.filterActiveNotes();
    this.filterArchiveNotes();
  }

  onDeleteNoteEventHandler(id) {
    console.log('on delete: ', id);
  }

  onArchiveNoteEventHandler(id) {
    console.log('on archive: ', id);
  }

  onActiveNoteEventHandler(id) {
    console.log('on active: ', id);
  }

  filterActiveNotes() {
    return this.state.notes.filter((note) => !note.archived);
  }

  filterArchiveNotes() {
    return this.state.notes.filter((note) => note.archived);
  }

  render() {
    return (
      <div className='notes-app'>
        <CreateNote addNote={this.onAddNoteEventHandler} />
        <SearchNotes />
        <NoteContainer 
          titleContainer='Catatan Aktif' 
          notes={this.filterActiveNotes()}
          onDelete={this.onDeleteNoteEventHandler}
          onArchive={this.onArchiveNoteEventHandler}
          onActive={this.onActiveNoteEventHandler}
        />
        <NoteContainer 
          titleContainer='Arsip' 
          notes={this.filterArchiveNotes()}
          onDelete={this.onDeleteNoteEventHandler}
          onArchive={this.onArchiveNoteEventHandler}
          onActive={this.onActiveNoteEventHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
