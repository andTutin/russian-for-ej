import { LOADING_START, loadingEnd } from "./actions";

export const loading = (store) => (next) => (action) => {
  if (action.type === LOADING_START) {
    setTimeout(() => {
      store.dispatch(loadingEnd());
    }, 4000);
  }

  return next(action);
};
