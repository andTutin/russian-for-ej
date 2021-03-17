export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_REQUEST_SUCCESS = "GET_CATEGORIES_REQUEST_SUCCESS";
export const GET_CATEGORIES_REQUEST_FAILED = "GET_CATEGORIES_REQUEST_FAILED";

export const GET_WORDS_REQUEST = "GET_WORDS_REQUEST";
export const GET_WORDS_REQUEST_SUCCESS = "GET_WORDS_REQUEST_SUCCESS";
export const GET_WORDS_REQUEST_FAILED = "GET_WORDS_REQUEST_FAILED";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

export const loadingStart = () => {
  return {
    type: LOADING_START,
  };
};

export const loadingEnd = () => {
  return {
    type: LOADING_END,
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
    error
  };
};

export const getWordsRequest = (category) => {
  return {
    type: GET_WORDS_REQUEST,
    category,
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
    error
  };
};
