/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/noteActions';

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
    };
    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};*/

import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
  },
  input: {
    flex: 1,
  },
  submitButton: {
    marginLeft: 'auto',
  },
}));

function NoteForm({ onSubmit }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className={classes.input}
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Add Note
      </Button>
    </form>
  );
}

export default NoteForm;