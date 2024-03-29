import jwt from 'jsonwebtoken';
import jwtSecret from '../pages/api/config/secret';

export default function generateToken(user) {
  const payload = {
    username: user.username,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, jwtSecret, options);
}
