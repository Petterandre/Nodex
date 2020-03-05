import { DELETE_MANGA, GET_MANGA, ADD_MANGA } from "../actions/types.js";

const initialState = {
  manga: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MANGA:
      return {
        ...state,
        manga: action.payload
      };
    case DELETE_MANGA:
      return {
        ...state,
        manga: state.manga.filter(manga => manga.id !== action.payload)
      };
    case ADD_MANGA:
      return {
        ...state,
        manga: [...state.manga, action.payload]
      };
    default:
      return state;
  }
}
