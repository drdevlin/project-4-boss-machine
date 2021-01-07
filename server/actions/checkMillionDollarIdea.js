const checkMillionDollarIdea = (req, res, next) => {
  const proposedIdea = req.body;
  const { numWeeks, weeklyRevenue } = proposedIdea;
  if (!numWeeks || !weeklyRevenue) res.status(400).send();
  const value = numWeeks * weeklyRevenue;
  if (!value || value < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
