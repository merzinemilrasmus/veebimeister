import sha1 from './sha1.js';

const apiRequest = body => fetch('/api.php', {
  method: 'POST',
  body: JSON.stringify(body)
});

export default {
  getCourses: () => apiRequest({
    requestType: 1,
    sessionId: sessionStorage.getItem('sessionId')
  }),
  login: (email, password) => apiRequest({
    requestType: 2,
    hash: sha1(password),
    email
  }),
  register: (koolituseId) => apiRequest({
    requestType: 3,
    sessionId: sessionStorage.getItem('sessionId'),
    koolituseId
  })
};
