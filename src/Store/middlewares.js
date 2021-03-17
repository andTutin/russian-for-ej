import {
  GET_CATEGORIES_REQUEST,
  GET_WORDS_REQUEST,
  getCategoriesRequestSuccess,
  getCategoriesRequestFailed,
  getWordsRequestSuccess,
  getWordsRequestFailed,
  loadingStart,
  loadingEnd,
  setCurrentCategory,
  getWordsRequest,
} from "./actions";
import { BASE_URL } from "../config";

export const appMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES_REQUEST) {
    store.dispatch(loadingStart());
    fetch(`${BASE_URL}api/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((categories) => {
        store.dispatch(getCategoriesRequestSuccess(categories));
        return categories[0];
      })
      .then((category) => {
        store.dispatch(setCurrentCategory(category.title));
        return category.title;
      })
      .then((title) => store.dispatch(getWordsRequest(title)))
      .catch((err) => store.dispatch(getCategoriesRequestFailed(err)))
  }

  if (action.type === GET_WORDS_REQUEST) {
    fetch(`${BASE_URL}api/word/search?category=${action.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((words) => store.dispatch(getWordsRequestSuccess(words)))
      .catch((err) => store.dispatch(getWordsRequestFailed(err)))
      .finally(store.dispatch(loadingEnd()));
  }

  return next(action);
};
