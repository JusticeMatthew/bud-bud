export default function catcher(req, res) {
  res
    .status(404)
    .json({
      message: `/api/${req.query.catcher} <-- is not a valid endpoint.`,
    });
}
