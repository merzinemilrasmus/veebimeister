import sha1 from '../libs/api.js';

const apiRequest = body => fetch('/api.php', {
  method: 'POST',
  body: JSON.stringify(body)
});

export default {
  getCourses: () => apiRequest({ requestType: 1 }),
  login: (email, password) => apiRequest({
    requestType: 2,
    hash: sha1(password),
    email
  })
};
