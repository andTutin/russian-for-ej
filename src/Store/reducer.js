import {
  LOADING_START,
  LOADING_END,
  GET_CATEGORIES_REQUEST_SUCCESS,
  GET_CATEGORIES_REQUEST_FAILED,
  GET_WORDS_REQUEST_SUCCESS,
  GET_WORDS_REQUEST_FAILED,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
} from "./actions";

const initialState = {
  currentPage: "about",
  currentCategory: null,
  isLoading: true,
  categories: [],
  words: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case GET_CATEGORIES_REQUEST_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_CATEGORIES_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case GET_WORDS_REQUEST_SUCCESS:
      return {
        ...state,
        words: action.payload,
      };
    case GET_WORDS_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
