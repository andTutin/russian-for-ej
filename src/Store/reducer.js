import { LOADING_END, SET_CURRENT_PAGE, SET_CURRENT_CATEGORY} from "./actions";

const initialState = {
  currentPage: "about",
  currentCategory: 'Rocket',
  isLoading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case SET_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.payload,
        };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
