const { connectToDatabase } = require('../../util/mongodb');
const bcrypt = require('bcrypt');

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const users = db.collection('bb-users');
  const { username, password } = req.body;

  const BCRYPT_SALT_ROUNDS = 12;

  await users.createIndex({ username: 1 }, { unique: true });

  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, BCRYPT_SALT_ROUNDS)
      .then(async (hashedPass) => {
        await users.insertOne({
          username: username,
          password: hashedPass,
          registered: new Date().toUTCString(),
        });
        res.status(201).json({ succes: true, message: 'User created.' });
      })
      .catch((err) => {
        if (err.name === 'MongoError' && err.code === 11000) {
          res
            .status(409)
            .json({ succes: false, message: 'Sorry, that username is taken.' });
        } else {
          res.status(400).json({
            succes: false,
            message: `An unexpected error occured. Error name: ${err.name} | Error code: ${err.code}`,
          });
        }
      });
  });
};
