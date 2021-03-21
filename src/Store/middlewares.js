import {
  GET_CATEGORIES_REQUEST,
  GET_WORDS_REQUEST,
  getCategoriesRequestSuccess,
  getCategoriesRequestFailed,
  setCurrentCategory,
  getWordsRequest,
  getWordsRequestSuccess,
  getWordsRequestFailed,
  CHECK_AUTH,
  checkAuthSuccess,
  checkAuthFailed,
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailed,
  POST_CATEGORY,
  postCategorySuccess,
  postCategoryFailed,
  POST_WORD,
  postWordSuccess,
  postWordFailed,
  REGISTRATION_REQUEST,
  registrationRequestSuccess,
  registrationRequestFailed,
  resetAlertMessage,
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

          if (categories.length !== 0)
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
          `${BASE_URL}api/word/search?category=${action.payload}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        await store.dispatch(setCurrentCategory(action.payload));

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

  if (action.type === CHECK_AUTH) {
    (async () => {
      try {
        const { token } = await JSON.parse(localStorage.getItem("userData"));
        const response = await fetch(`${BASE_URL}api/auth/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          store.dispatch(checkAuthSuccess());
        } else {
          store.dispatch(checkAuthFailed({}));
        }
      } catch (err) {
        store.dispatch(checkAuthFailed(err));
      }
    })();
  }

  if (action.type === LOGIN_REQUEST) {
    (async () => {
      try {
        const response = await fetch(`${BASE_URL}api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(action.payload),
        });

        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("userData", JSON.stringify({ token: token }));
          store.dispatch(loginRequestSuccess());
        } else {
          store.dispatch(loginRequestFailed({}));
        }
      } catch (err) {
        store.dispatch(loginRequestFailed(err));
      }
    })();
  }

  if (action.type === POST_CATEGORY) {
    (async () => {
      try {
        const { token } = await JSON.parse(localStorage.getItem("userData"));
        const response = await fetch(`${BASE_URL}api/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category: action.payload }),
        });

        if (response.ok) {
          const { newcategory } = await response.json();

          store.dispatch(postCategorySuccess(newcategory));

          setTimeout(() => {
            store.dispatch(resetAlertMessage());
          }, 3000);
        } else {
          const code = response.status;
          const { message } = await response.json();
          const error = { message, code };

          throw error;
        }
      } catch (error) {
        if (error.code === 401) {
          store.dispatch(checkAuthFailed());
        }
        store.dispatch(postCategoryFailed(error));

        setTimeout(() => {
          store.dispatch(resetAlertMessage());
        }, 3000);
      }
    })();
  }

  if (action.type === POST_WORD) {
    (async () => {
      try {
        const { token } = await JSON.parse(localStorage.getItem("userData"));
        const response = await fetch(`${BASE_URL}api/word`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(action.payload),
        });

        if (response.ok) {
          store.dispatch(postWordSuccess());

          setTimeout(() => {
            store.dispatch(resetAlertMessage());
          }, 3000);
        } else {
          const code = response.status;
          const { message } = await response.json();
          const error = { message, code };

          throw error;
        }
      } catch (error) {
        if (error.code === 401) {
          store.dispatch(checkAuthFailed());
        }
        store.dispatch(postWordFailed(error));

        setTimeout(() => {
          store.dispatch(resetAlertMessage());
        }, 3000);
      }
    })();
  }

  if (action.type === REGISTRATION_REQUEST) {
    (async () => {
      try {
        const { token } = await JSON.parse(localStorage.getItem("userData"));
        const response = await fetch(`${BASE_URL}api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(action.payload),
        });

        if (response.ok) {
          store.dispatch(registrationRequestSuccess());

          setTimeout(() => {
            store.dispatch(resetAlertMessage());
          }, 3000);
        } else {
          const code = response.status;
          const { message } = await response.json();
          const error = { message, code };

          throw error;
        }
      } catch (error) {
        if (error.code === 401) {
          store.dispatch(checkAuthFailed());
        }
        store.dispatch(registrationRequestFailed(error));

        setTimeout(() => {
          store.dispatch(resetAlertMessage());
        }, 3000);
      }
    })();
  }

  return next(action);
};
