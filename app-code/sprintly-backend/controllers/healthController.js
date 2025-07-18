exports.getHealthStatus = (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is healthy ✅' });
};
