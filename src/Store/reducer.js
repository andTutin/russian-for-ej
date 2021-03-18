import {
  LOADING_CATEGORIES_START,
  LOADING_CATEGORIES_END,
  LOADING_WORDS_START,
  LOADING_WORDS_END,
  GET_CATEGORIES_REQUEST_SUCCESS,
  GET_CATEGORIES_REQUEST_FAILED,
  GET_WORDS_REQUEST_SUCCESS,
  GET_WORDS_REQUEST_FAILED,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
} from "./actions";

const initialState = {
  currentPage: window.location.pathname.split("/").pop(),
  currentCategory: "",
  loadingCategories: false,
  loadingWords: false,
  categories: [],
  words: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CATEGORIES_START:
      return {
        ...state,
        loadingCategories: true,
      };
    case LOADING_CATEGORIES_END:
      return {
        ...state,
        loadingCategories: false,
      };
    
    case LOADING_WORDS_START:
      return {
        ...state,
        loadingWords: true,
      };
    case LOADING_WORDS_END:
      return {
        ...state,
        loadingWords: false,
      };
    
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
