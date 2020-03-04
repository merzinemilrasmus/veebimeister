const apiRequest = body => fetch('/api.php', {
  method: 'POST';
  body: JSON.stringify(body)
});

export default {
  getCourses: () => apiRequest({ requestType: 1 })
};
