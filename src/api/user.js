import axios from 'axios';

class UserApi {
  static signInRequest(requestBody) {
    return axios.post('/api/auth/sign-in', requestBody)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default UserApi;
