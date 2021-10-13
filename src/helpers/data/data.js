import axios from 'axios';

const getAuthToken = (email, password) => new Promise((resolve, reject) => {
  axios.post('https://grasperapi.azurewebsites.net/api/v1/Users/authenticate',
    {
      email: `${email}`,
      password: `${password}`
    })
    .then((response) => resolve(response.data.token))
    .catch((error) => reject(error));
});

const getSignals = (authToken) => new Promise((resolve, reject) => {
  axios.get('https://grasperapi.azurewebsites.net/api/v1/Signals?Page=1&Limit=10', {
    headers: { Authorization: `Bearer ${authToken}` }
  })
    .then((response) => resolve(response.data.items))
    .catch((error) => reject(error));
});

export { getSignals, getAuthToken };
