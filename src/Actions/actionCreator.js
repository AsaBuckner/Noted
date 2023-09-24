// actionTypes
export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
// Define your other action types here

  
  // Action creators
  export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData,
  });
  
  export const addNewNote = (newNote) => ({
    type: ADD_NEW_NOTE,
    payload: newNote,
  });
  
  export const updateNote = (noteId, updatedNote) => ({
    type: UPDATE_NOTE,
    payload: { noteId, updatedNote },
  });
  
  export const deleteNote = (noteId) => ({
    type: DELETE_NOTE,
    payload: noteId,
  });
  
  export const addNewList = (newList) => ({
    type: ADD_NEW_LIST,
    payload: newList,
  });

  export const deleteList = (listId) => ({
    type: DELETE_LIST,
    payload: listId,
  });
  
  export const addListItem = (listId, newItem) => ({
    type: ADD_LIST_ITEM,
    payload: { listId, newItem },
  });
  
  export const deleteListItem = (listId, itemIndex) => ({
    type: DELETE_LIST_ITEM,
    payload: { listId, itemIndex },
  });
  // Define more action creators as needed
  