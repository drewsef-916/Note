import React from 'react';

class Note extends React.Component {
  render() {
    const {note} = this.props;

    return (
      <div className = "note-container">
        <form className = "note-form">
          <input 
            className = "note-title-input"
            type = "text"
            placeholder = "Note Title..."
            default value = {note.title}
          />
          <textarea
            className = "note-textarea"
            placeholder = "Type here..."
            default value = {note.content}
          />
          <input className = "note-button" type = "submit" value = "submit"/>
        </form>
      </div>
    );
  }
}

export default Note;