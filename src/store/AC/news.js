import * as types from '../actions/news';

export const setAllNews = news => ({ type: types.SET_NEWS, news });
export const setActiveNews = news => ({ type: types.SET_ACTIVE_NEWS, news });
export const fetchAllNews = () => ({ type: types.FETCH_ALL_NEWS });
export const fetchNews = id => ({ type: types.FETCH_NEWS, id });

export const fetchCabinetNews = cityId => ({ type: types.FETCH_CABINET_NEWS, cityId });
export const fetchCabinetNewsFail = () => ({ type: types.FETCH_CABINET_NEWS_FAIL });
export const setCabinetNews = news => ({ type: types.SET_CABINET_NEWS, news });

export const createNewsValidation = () => ({ type: types.CREATE_NEWS_VALIDATION });
export const createNewsRequest = data => ({ type: types.CREATE_NEWS_REQUEST, data });
export const createNewsSuccess = () => ({ type: types.CREATE_NEWS_SUCCESS });
export const createNewsFail = () => ({ type: types.CREATE_NEWS_FAIL });
