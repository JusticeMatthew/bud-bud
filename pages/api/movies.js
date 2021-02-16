const { connectToDatabase } = require('../../util/mongodb');
const { ObjectId } = require('mongodb');

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { id } = req.body;

  const users = await db
    .collection('bb-users')
    .find({ _id: ObjectId(id) })
    .toArray();

  res.json(users);
};
