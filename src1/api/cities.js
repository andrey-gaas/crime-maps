import axios from 'axios';

class CitiesApi {
  static fetch() {
    return axios.get(`/api/cities`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default CitiesApi;
