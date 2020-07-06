import axios from 'axios';

class NewsApi {
  static fetch(city) {
    return axios.get(`/api/news/${city}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default NewsApi;
