import {
  GET_CATEGORIES_REQUEST_SUCCESS,
  //GET_CATEGORIES_REQUEST_FAILED,
  GET_WORDS_REQUEST_SUCCESS,
  //GET_WORDS_REQUEST_FAILED,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
} from "./actions";

const initialState = {
  categories: [],
  currentCategory: "",
  words: [],
  currentPage: window.location.pathname.split("/").pop(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case GET_CATEGORIES_REQUEST_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case GET_WORDS_REQUEST_SUCCESS:
      return {
        ...state,
        words: action.payload,
      };
    default:
      return state;
  }
};
