/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, deleteNote } from '../actions/noteActions';

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};*/

import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import NoteCard from './NoteCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
}));

function NoteList({ notes, onDeleteNote }) {
  const classes = useStyles();

  const handleDeleteNote = (noteId) => {
    onDeleteNote(noteId);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
            <NoteCard note={note} onDeleteNote={handleDeleteNote} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default NoteList;

