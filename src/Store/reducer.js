import {
  GET_CATEGORIES_REQUEST_SUCCESS,
  GET_CATEGORIES_REQUEST_FAILED,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_FAILED,
  GET_WORDS_REQUEST_SUCCESS,
  GET_WORDS_REQUEST_FAILED,
  POST_WORD_SUCCESS,
  POST_WORD_FAILED,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILED,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  REGISTRATION_REQUEST_SUCCESS,
  REGISTRATION_REQUEST_FAILED,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_PAGE,
  RESET_ALERT_MESSAGE,
} from "./actions";

const initialState = {
  categories: [],
  currentCategory: "",
  words: [],
  currentPage: window.location.pathname.split("/").pop(),
  isAuthorized: false,
  isChecking: true,
  alertMessage: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case POST_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        alertMessage: { message: "Категория добавлена" },
      };
    case POST_CATEGORY_FAILED:
      return {
        ...state,
        alertMessage: action.error,
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
    case POST_WORD_SUCCESS:
      return {
        ...state,
        alertMessage: { message: "Слово добавлено" },
      };
    case POST_WORD_FAILED:
      return {
        ...state,
        alertMessage: action.error,
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

    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
      };
    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        authError: action.error,
      };

    case REGISTRATION_REQUEST_SUCCESS:
      return {
        ...state,
        alertMessage: { message: "Пользователь добавлен" },
      };
    case REGISTRATION_REQUEST_FAILED:
      return {
        ...state,
        alertMessage: action.error,
      };

    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case RESET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: "",
      };

    default:
      return state;
  }
};
