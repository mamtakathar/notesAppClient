// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { fetchNotes } from './redux/actions/notesActions';

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    // Fetch notes from the backend
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <NoteForm />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
