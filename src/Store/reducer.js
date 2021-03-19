import {
  GET_CATEGORIES_REQUEST_SUCCESS,
  GET_CATEGORIES_REQUEST_FAILED,
  GET_WORDS_REQUEST_SUCCESS,
  GET_WORDS_REQUEST_FAILED,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILED,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  POST_CATEGORY_SUCCESS,
} from "./actions";

const initialState = {
  categories: [],
  currentCategory: "",
  words: [],
  currentPage: window.location.pathname.split("/").pop(),
  isAuthorized: false,
  categoriesError: null,
  wordsError: null,
  authError: null,
  isChecking: true,
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
    case GET_CATEGORIES_REQUEST_FAILED:
      return {
        ...state,
        categoriesError: action.error,
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
    case GET_WORDS_REQUEST_FAILED:
      return {
        ...state,
        wordsError: action.error,
      };
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        isChecking: false,
      };
    case CHECK_AUTH_FAILED:
      return {
        ...state,
        isAuthorized: false,
        authError: action.error,
        isChecking: false,
      };
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        authError: action.error,
      };
    }
    case POST_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    }
    default:
      return state;
  }
};
