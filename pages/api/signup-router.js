import { connectToDatabase } from '../../config/mongodb';
import bcrypt from 'bcrypt';

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const users = db.collection('bb-users');
  const { username, password } = req.body;

  await users.createIndex({ username: 1 }, { unique: true });

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 12).then(async (hashedPass) => {
      await users
        .insertOne({
          username: username,
          password: hashedPass,
          registered: new Date().toUTCString(),
          meds: [],
        })
        .then(async () => {
          // change to token
          // req.session.set('user', username);
          // await req.session.save();
          res.status(201).json({
            username: username,
            success: true,
            message: 'User created.',
          });
        })
        .catch((err) => {
          if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).json({
              success: false,
              message: 'Sorry, that username is taken.',
            });
          } else {
            res.status(400).json({
              success: false,
              message: `An unexpected error occured. Error name: ${err.name} | Error code: ${err.code}`,
            });
          }
        });
    });
  });
}
