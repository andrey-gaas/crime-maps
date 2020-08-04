import axios from 'axios';

class UserApi {
  static signIn(requestBody) {
    return axios.post('/api/auth/sign-in', requestBody)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static signUp(requestBody) {
    return axios.post('/api/auth/sign-up', requestBody)
      .then(response => response)
      .catch(({ response }) => ({ ...response}));
  }

  static fetchUserData() {
    return axios.get('/api/auth/user')
      .then(response => response)
      .catch(({ response }) => ({ ...response}));
  }

  static logout() {
    return axios.get('/api/auth/logout')
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default UserApi;
