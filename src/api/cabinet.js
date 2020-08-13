import axios from 'axios';

class CabitenApi {
  static fetchUsers(name) {
    return axios.get(`/api/users/${name}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default CabitenApi;
