export default function catcher(req, res) {
  res
    .status(404)
    .json({ message: `${req.query.catcher} <-- not a valid endpoint.` });
}
