import { connectToDatabase } from '../../../config/mongodb';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../../config/secret';

export default async (req, res) => {
  const token = req.headers.authorization;
  const { username } = req.query;

  try {
    if (!token || !jwt.verify(token, jwtSecret)) {
      return res.status(401).json({ message: 'Not Authorized' });
    } else {
      const { db } = await connectToDatabase();
      const users = db.collection('bb-users');
      const user = await users.findOne({ username: username });
      return res.status(200).json(user);
    }
  } catch (e) {
    return res.status(401).json(e);
  }
};
