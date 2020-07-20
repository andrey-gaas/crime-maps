import * as actions from '../actions/news';

const initialState = {
  news: [],
  cabinetNews: null,
  activeNews: null,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.SET_NEWS:
      return { ...state, news: [...action.news] };
    case actions.SET_ACTIVE_NEWS:
      return { ...state, activeNews: action.news };
    case actions.SET_CABINET_NEWS:
      return { ...state, cabinetNews: action.news };
    default:
      return state;
  }
}
