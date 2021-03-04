import { connectToDatabase } from './config/mongodb';
import bcrypt from 'bcrypt';
import generateToken from '../../utils/tokenMaker';

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const users = db.collection('bb-users');
  const { username, password } = req.body;

  return new Promise(async (resolve, reject) => {
    const user = await users.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    try {
      const verified = await bcrypt.compare(password, user.password);
      if (verified) {
        const token = generateToken(user);
        res.status(200).json({
          username: username,
          success: true,
          token,
        });
      } else {
        res.status(401).json({ message: 'Username or password incorrect' });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
      console.log(e);
    }
  });
}
