import {
  GET_CATEGORIES_REQUEST,
  GET_WORDS_REQUEST,
  getCategoriesRequestSuccess,
  getCategoriesRequestFailed,
  setCurrentCategory,
  getWordsRequest,
  getWordsRequestSuccess,
  getWordsRequestFailed,
} from "./actions";
import { BASE_URL } from "../config";

export const appMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_CATEGORIES_REQUEST) {
    (async () => {
      try {
        const response = await fetch(`${BASE_URL}api/category`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });

        if (response.ok) {
          const categories = await response.json();
          await store.dispatch(getCategoriesRequestSuccess(categories));
          await store.dispatch(getWordsRequest(categories[0].title));
        } else {
          store.dispatch(getCategoriesRequestFailed({}));
        }
      } catch (err) {
        store.dispatch(getCategoriesRequestFailed(err));
      }
    })();
  }

  if (action.type === GET_WORDS_REQUEST) {
    (async () => {
      try {
        const response = await fetch(
          `${BASE_URL}api/word/search?category=${action.category}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        await store.dispatch(setCurrentCategory(action.category));

        if (response.ok) {
          const words = await response.json();
          await store.dispatch(getWordsRequestSuccess(words));
        } else {
          store.dispatch(getWordsRequestFailed({}));
        }
      } catch (err) {
        store.dispatch(getWordsRequestFailed(err));
      }
    })();
  }

  return next(action);
};
