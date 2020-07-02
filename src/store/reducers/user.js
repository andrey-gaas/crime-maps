import cookie from 'js-cookie';

const token = cookie.get('token');

const initialState = {
  isAuth: !!token,
};

export default function(state = initialState, action) {
  return state;
};
