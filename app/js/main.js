var app = angular
  .module('finApp', []);
app.constant('SERVER', {
  URL: 'https://finapps2016-backend.herokuapp.com',
  CONFIG: {
    headers: {
      'Content-Type': 'application/json'
    }
  }
});
