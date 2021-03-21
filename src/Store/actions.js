export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_REQUEST_SUCCESS = "GET_CATEGORIES_REQUEST_SUCCESS";
export const GET_CATEGORIES_REQUEST_FAILED = "GET_CATEGORIES_REQUEST_FAILED";

export const POST_CATEGORY = "POST_CATEGORY";
export const POST_CATEGORY_SUCCESS = "POST_CATEGORY_SUCCESS";
export const POST_CATEGORY_FAILED = "POST_CATEGORY_FAILED";

export const GET_WORDS_REQUEST = "GET_WORDS_REQUEST";
export const GET_WORDS_REQUEST_SUCCESS = "GET_WORDS_REQUEST_SUCCESS";
export const GET_WORDS_REQUEST_FAILED = "GET_WORDS_REQUEST_FAILED";

export const POST_WORD = "POST_WORD";
export const POST_WORD_SUCCESS = "POST_WORD_SUCCESS";
export const POST_WORD_FAILED = "POST_WORD_FAILED";

export const CHECK_AUTH = "CHECK_AUTH";
export const CHECK_AUTH_SUCCESS = "CHECK_AUTH_SUCCESS";
export const CHECK_AUTH_FAILED = "CHECK_AUTH_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_REQUEST_SUCCESS = "REGISTRATION_REQUEST_SUCCESS";
export const REGISTRATION_REQUEST_FAILED = "REGISTRATION_REQUEST_FAILED";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

export const RESET_ALERT_MESSAGE = "RESET_ALERT_MESSAGE";

export const getCategoriesRequest = () => {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
};

export const getCategoriesRequestSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_REQUEST_SUCCESS,
    payload: categories,
  };
};

export const getCategoriesRequestFailed = (error) => {
  return {
    type: GET_CATEGORIES_REQUEST_FAILED,
    error,
  };
};

export const postCategory = (category) => {
  return {
    type: POST_CATEGORY,
    payload: category,
  };
};

export const postCategorySuccess = (category) => {
  return {
    type: POST_CATEGORY_SUCCESS,
    payload: category,
  };
};

export const postCategoryFailed = (error) => {
  return {
    type: POST_CATEGORY_FAILED,
    error,
  };
};

export const getWordsRequest = (category) => {
  return {
    type: GET_WORDS_REQUEST,
    payload: category,
  };
};

export const getWordsRequestSuccess = (words) => {
  return {
    type: GET_WORDS_REQUEST_SUCCESS,
    payload: words,
  };
};

export const getWordsRequestFailed = (error) => {
  return {
    type: GET_WORDS_REQUEST_FAILED,
    error,
  };
};

export const postWord = (word) => {
  return {
    type: POST_WORD,
    payload: word,
  };
};

export const postWordSuccess = () => {
  return {
    type: POST_WORD_SUCCESS,
  };
};

export const postWordFailed = (error) => {
  return {
    type: POST_WORD_FAILED,
    error,
  };
};

export const checkAuth = () => {
  return {
    type: CHECK_AUTH,
  };
};

export const checkAuthSuccess = () => {
  return {
    type: CHECK_AUTH_SUCCESS,
  };
};

export const checkAuthFailed = (error) => {
  return {
    type: CHECK_AUTH_FAILED,
    error,
  };
};

export const loginRequest = (form) => {
  return {
    type: LOGIN_REQUEST,
    payload: form,
  };
};

export const loginRequestSuccess = () => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
  };
};

export const loginRequestFailed = () => {
  return {
    type: LOGIN_REQUEST_FAILED,
  };
};

export const registrationRequest = (form) => {
  return {
    type: REGISTRATION_REQUEST,
    payload: form,
  };
};

export const registrationRequestSuccess = () => {
  return {
    type: REGISTRATION_REQUEST_SUCCESS,
  };
};

export const registrationRequestFailed = (error) => {
  return {
    type: REGISTRATION_REQUEST_FAILED,
    error,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const setCurrentCategory = (category) => {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: category,
  };
};

export const resetAlertMessage = () => {
  return {
    type: RESET_ALERT_MESSAGE,
  };
};
