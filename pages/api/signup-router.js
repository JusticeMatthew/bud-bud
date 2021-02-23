const { connectToDatabase } = require('../../utils/mongodb');
const bcrypt = require('bcrypt');

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const users = db.collection('bb-users');
  const { username, password } = req.body;

  await users.createIndex({ username: 1 }, { unique: true });

  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, 12)
      .then(async (hashedPass) => {
        await users.insertOne({
          username: username,
          password: hashedPass,
          registered: new Date().toUTCString(),
          meds: [],
        });
        res.status(201).json({ success: true, message: 'User created.' });
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
};
