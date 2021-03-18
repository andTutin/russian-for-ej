export const LOADING_CATEGORIES_START = "LOADING_CATEGORIES_START";
export const LOADING_CATEGORIES_END = "LOADING_CATEGORIES_END";

export const LOADING_WORDS_START = "LOADING_WORDS_START";
export const LOADING_WORDS_END = "LOADING_WORDS_END";

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_REQUEST_SUCCESS = "GET_CATEGORIES_REQUEST_SUCCESS";
export const GET_CATEGORIES_REQUEST_FAILED = "GET_CATEGORIES_REQUEST_FAILED";

export const GET_WORDS_REQUEST = "GET_WORDS_REQUEST";
export const GET_WORDS_REQUEST_SUCCESS = "GET_WORDS_REQUEST_SUCCESS";
export const GET_WORDS_REQUEST_FAILED = "GET_WORDS_REQUEST_FAILED";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

export const loadingCategoriesStart = () => {
  return {
    type: LOADING_CATEGORIES_START,
  };
};

export const loadingCategoriesEnd = () => {
  return {
    type: LOADING_CATEGORIES_END,
  };
};

export const loadingWordsStart = () => {
  return {
    type: LOADING_WORDS_START,
  };
};

export const loadingWordsEnd = () => {
  return {
    type: LOADING_WORDS_END,
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
