export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY"

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
}