import { SET_NEWS, FETCH_NEWS } from '../actions/news';

export const setNews = news => ({ type: SET_NEWS, news });
export const fetchNews = () => ({ type: FETCH_NEWS });
