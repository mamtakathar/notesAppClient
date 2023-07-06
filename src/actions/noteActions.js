import axios from 'axios';

const BASE_URL='http://localhost:8080/api'

// Action Types
export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Action Creators
export const getNotes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/notes`);
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const addNote = (note) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/notes`, note);
    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/notes/${id}`);
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};
