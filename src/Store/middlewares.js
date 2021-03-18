import {
  GET_CATEGORIES_REQUEST,
  GET_WORDS_REQUEST,
  getCategoriesRequestSuccess,
  //getCategoriesRequestFailed,
  getWordsRequestSuccess,
  //getWordsRequestFailed,
  loadingCategoriesStart,
  loadingWordsStart,
  loadingCategoriesEnd,
  loadingWordsEnd,
  setCurrentCategory,
  //getWordsRequest,
} from "./actions";
import { BASE_URL } from "../config";

export const appMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES_REQUEST) {
    console.log("загрузка категорий старт");
    store.dispatch(loadingCategoriesStart());

    fetch(`${BASE_URL}api/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((categories) => {
        console.log("загрузка категорий успех");
        store.dispatch(getCategoriesRequestSuccess(categories));

        return categories[0].title;
      })
      .then((title) => {
        console.log("установка текущей категории");
        store.dispatch(setCurrentCategory(title));

        return title;
      })
      //.then((title) => {
      //  console.log("загрузка категорий стоп");
      //  store.dispatch(loadingCategoriesEnd());

      //  return title;
      //})
      //.then((title) => {
      //  console.log("диспатч запроса слов");
      //  store.dispatch(getWordsRequest(title));
      //})
      //.catch((err) => store.dispatch(getCategoriesRequestFailed(err)))

  }

  if (action.type === GET_WORDS_REQUEST) {
    console.log("загрузка слов старт");
    store.dispatch(loadingWordsStart());

    fetch(`${BASE_URL}api/word/search?category=${action.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((words) => {
        console.log("загрузка слов успех");
        store.dispatch(getWordsRequestSuccess(words));
      })
      //.catch((err) => store.dispatch(getWordsRequestFailed(err)))
      .then(() => {
        console.log("загрузка слов стоп");
        store.dispatch(loadingWordsEnd());
      })
      .then(() => {
        console.log("загрузка категорий стоп");
        store.dispatch(loadingCategoriesEnd());
      })
  }

  return next(action);
};
