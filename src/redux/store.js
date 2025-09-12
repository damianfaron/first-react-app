import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
// import { type } from '@testing-library/user-event/dist/type';
//selectors

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const searchFormString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});
// lists
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
// column
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
// generate lists
export const getAllLists = (state) => state.lists;
// add new list
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortid() }],
      };
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
