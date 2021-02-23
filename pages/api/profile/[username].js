const { connectToDatabase } = require('../../../utils/mongodb');

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const users = db.collection('bb-users');
  const { username } = req.query;
  const user = await users.findOne({ username: username });

  // Wrap this in a Try/catch
  return res.status(200).json(user);
};
