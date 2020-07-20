import * as types from '../actions/news';

export const setAllNews = news => ({ type: types.SET_ALL_NEWS, news });
export const setActiveNews = news => ({ type: types.SET_ACTIVE_NEWS, news });
export const fetchAllNews = () => ({ type: types.FETCH_ALL_NEWS });
export const fetchNews = id => ({ type: types.FETCH_NEWS, id });

export const fetchNewsForCabinet = () => ({ type: types.FETCH_NEWS_FOR_CABINET });
