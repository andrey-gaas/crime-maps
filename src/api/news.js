import axios from 'axios';

class NewsApi {
  static fetchAll(city) {
    return axios.get(`/api/news/city/${city}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static fetch(id) {
    return axios.get(`/api/news/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  };
}

export default NewsApi;
