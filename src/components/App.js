/*import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App = () => {
  return (
    <div>
      <h1>Note Taking Application</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;*/

// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { getNotes,addNote, deleteNote } from '../actions/noteActions';

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    // Fetch notes from the backend
    dispatch(getNotes());
  }, [dispatch]);

  const handleSubmitNote = (note) => {
    dispatch(addNote(note));
  };

  const handleDeleteNote= (note) =>{
    dispatch(deleteNote(note))
  }

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <NoteForm onSubmit={handleSubmitNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default App;