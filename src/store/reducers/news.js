import { SET_NEWS } from '../actions/news';

const initialState = [];

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_NEWS:
      return [...state, ...action.news];
    default:
      return state;
  }
}
