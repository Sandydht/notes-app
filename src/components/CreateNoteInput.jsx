import React from 'react';

class CreateNoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.countTitleLength = this.countTitleLength.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => ({
        title: event.target.value
      }));
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({
      body: event.target.value
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title.length <= 50) {
      this.props.addNote(this.state);
      this.resetInput();
    }
  }

  countTitleLength() {
    return 50 - this.state.title.length;
  }

  resetInput() {
    this.setState(() => ({
      title: '',
      body: ''
    }));
  }

  render() {
    return (
      <form className='create-note-input' onSubmit={this.onSubmitEventHandler}>
        <div className='create-note-input__item'>
          <p className='create-note-input__validation-message'>Sisa karakter: {this.countTitleLength()}</p>
          <input 
            type="text" 
            placeholder='Judul catatan...' 
            value={this.state.title} 
            onChange={this.onTitleChangeEventHandler}
          />
        </div>
        <div className='create-note-input__item'>
          <textarea 
            rows={15} 
            placeholder='Tulis catatanmu disini...'
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
        </div>
        <div className='create-note-input__item'>
          <button type='submit'>Buat</button>
        </div>
      </form>
    );
  }
}

export default CreateNoteInput;
