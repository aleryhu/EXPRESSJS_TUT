/** @format */

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'aliyu') {
    req.user = { name: 'aliyu', id: 1234 };
    next();
  }
  else{
    res.status(401).send('Unauthorized')
  }
};

module.exports = authorize;
