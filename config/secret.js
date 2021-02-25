require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET || 'extraSecret';
export default jwtSecret;
