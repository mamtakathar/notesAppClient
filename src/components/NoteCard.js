import React from 'react';
import { Card, CardContent, Typography, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    height: '100%',
  },
  deleteButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

function NoteCard({ note, onDeleteNote }) {
  const classes = useStyles();

  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3">
          {note.title}
        </Typography>
        <Typography variant="body2" component="p">
          {note.content}
        </Typography>
      </CardContent>
      <IconButton
        className={classes.deleteButton}
        aria-label="delete"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

export default NoteCard;
