const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

function login() {
  // add cookie
  document.cookie = `token=${token};`;
}

module.exports = { login };
