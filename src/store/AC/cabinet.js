import * as types from '../actions/cabinet';

export const cabinetUsersRequest = name => ({ type: types.CABINET_USERS_REQUEST, name });
export const cabinetUsersSuccess = users => ({ type: types.CABINET_USERS_SUCCESS, users });
export const cabinetUsersFail    = message => ({ type: types.CABINET_USERS_FAIL, message });
export const setCabinetUsers     = users => ({ type: types.SET_CABINET_USERS, users });
