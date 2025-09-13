import { createStore } from 'redux';
import initialState from './initialState';
import { combineReducers } from 'redux';

// import reducer
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';


// -----------------------
// Subreducery
// -----------------------

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

// const reducer = (state, action) => ({

// ===========================================
// bez combineReducers
// lists: listsReducer(state.lists, action),
// columns: columnsReducer(state.columns, action),
// cards: cardsReducer(state.cards, action),
// searchString: searchStringReducer(state.searchString, action),
// ============================================
// FIRST
// switch (action.type) {
//   case 'ADD_COLUMN':
//     return {
//       ...state,
//       columns: [...state.columns, { ...action.payload, id: shortid() }],
//     };
//   case 'ADD_CARD':
//     return {
//       ...state,
//       cards: [...state.cards, { ...action.payload, id: shortid() }],
//     };
//   case 'UPDATE_SEARCHSTRING':
//     return {
//       ...state,
//       searchString: action.payload,
//     };
//   case 'ADD_LIST':
//     return {
//       ...state,
//       lists: [...state.lists, { ...action.payload, id: shortid() }],
//     };
//   case 'TOGGLE_CARD_FAVORITE':
//     return {
//       ...state,
//       cards: state.cards.map((card) =>
//         card.id === action.payload
//           ? { ...card, isFavorite: !card.isFavorite }
//           : card
//       ),
//     };
//   default:
//     return state;
// }
// });
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
