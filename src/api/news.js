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

  static create(data) {
    return axios.post('/api/news/', data)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  };

  static remove(id) {
    return axios.delete(`/api/news/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default NewsApi;
