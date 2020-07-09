import { SET_ALL_NEWS, FETCH_ALL_NEWS, FETCH_NEWS, SET_ACTIVE_NEWS } from '../actions/news';

export const setAllNews = news => ({ type: SET_ALL_NEWS, news });
export const setActiveNews = news => ({ type: SET_ACTIVE_NEWS, news });
export const fetchAllNews = () => ({ type: FETCH_ALL_NEWS });
export const fetchNews = id => ({ type: FETCH_NEWS, id });
