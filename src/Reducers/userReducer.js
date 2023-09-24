
import {
    SET_USER_DATA,
    ADD_NEW_NOTE,
    // Define your action types here
  } from '../actionTypes';
  
  const initialState = {
    userData: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
        return {
          ...state,
          userData: action.payload
        };
      case ADD_NEW_NOTE:
        return {
          ...state,
          userData: {
            ...state.userData,
            notes: [...state.userData.notes, action.payload],
          },
        };
      // Handle other action types here
      case ADD_NEW_MEMO:
        return {
          ...state,
          userData: {
            ...state.userData,
            memos: [...state.userData.memos, action.payload],
          },
        };
        
      case ADD_NEW_TIMER:
        return {
            ...state,
            userData: {
            ...state.userData,
            timers: [...state.userData.timers, action.payload],
            },
        };
            
        case DELETE_TIMER:
        const timerIdToDelete = action.payload;
        const updatedTimersAfterDeletion = state.userData.timers.filter(
            (timer) => timer.id !== timerIdToDelete
        );
        return {
            ...state,
            userData: {
            ...state.userData,
            timer: updatedTimersAfterDeletion,
            },
        };

      case ADD_NEW_LIST:
        return {
            ...state,
            userData: {
            ...state.userData,
            lists: [...state.userData.lists, action.payload],
            },
        };


      case DELETE_LIST:
        const listIdToDelete = action.payload;
        const updatedListsAfterDeletion = state.userData.lists.filter(
            (list) => list.id !== listIdToDelete
        );
        return {
            ...state,
            userData: {
            ...state.userData,
            lists: updatedListsAfterDeletion,
            },
        };
          
      case ADD_LIST_ITEM:
        const { listId, newItem } = action.payload;
        const updatedLists = state.userData.lists.map((list) =>
            list.id === listId
            ? {
                ...list,
                list: [...list.list, newItem],
                }
            : list
        );
        return {
            ...state,
            userData: {
            ...state.userData,
            lists: updatedLists,
            },
        };
        
      case DELETE_LIST_ITEM:
        const { listId, itemIndex } = action.payload;
        const listsWithDeletedItem = state.userData.lists.map((list) =>
            list.id === listId
            ? {
                ...list,
                list: list.list.filter((_, index) => index !== itemIndex),
                }
            : list
        );
        return {
            ...state,
            userData: {
            ...state.userData,
            lists: listsWithDeletedItem,
            },
        };

    


      default:
        return state;
    }
  };
  
  export default userReducer;
  