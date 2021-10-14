import { connectToDatabase } from './config/mongodb';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import jwtSecret from './config/secret';

export default async function (req, res) {
  const token = req.headers.authorization;
  const username = req.headers.data;
  const bud = req.body;

  const newbud = { ...bud, id: uuidv4() };

  try {
    if (!token || !jwt.verify(token, jwtSecret)) {
      return res.status(401).json({ message: 'Not Authorized' });
    } else {
      const { db } = await connectToDatabase();
      const users = db.collection('bb-users');
      await users.updateOne(
        { username: username },
        {
          $push: { meds: newbud },
        },
      );
      return res.status(200).json({
        message: `Your bud was successfully added! Wow you are a programming god!`,
      });
    }
  } catch (e) {
    return res.status(401).json(e);
  }
}
