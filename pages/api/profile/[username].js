const { connectToDatabase } = require('../../../utils/mongodb');

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const users = db.collection('bb-users');
  const { username } = req.query;

  // Wrap this in a Try/catch
  const user = await users.findOne({ username: username });
  return res.status(200).json(user);
};
