import { SET_ALL_NEWS, SET_ACTIVE_NEWS } from '../actions/news';

const initialState = {
  allNews: [],
  activeNews: null,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_ALL_NEWS:
      return { ...state, allNews: [...action.news] };
    case SET_ACTIVE_NEWS:
      return { ...state, activeNews: action.news };
    default:
      return state;
  }
}
