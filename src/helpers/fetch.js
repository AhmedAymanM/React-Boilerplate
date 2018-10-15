import 'unfetch/polyfill';

// set your default token and api_url
const userToken = '';
const API_URL = 'www.apidomain.com';

function headers(token) {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorize: token
  };
}

function parseResponse(response) {
  return response.json().then(json => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return json;
  });
}

function queryString(params) {
  const query = Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export default {
  get(url, params = {}) {
    return fetch(`${API_URL}${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(userToken)
    }).then(parseResponse);
  },

  post(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers(userToken),
      body
    }).then(parseResponse);
  },

  put(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${API_URL}${url}`, {
      method: 'PUT',
      headers: headers(userToken),
      body
    }).then(parseResponse);
  },

  delete(url) {
    return fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: headers(userToken)
    }).then(parseResponse);
  }
};
