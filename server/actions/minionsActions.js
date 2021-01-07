const { 
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('../db/db');

// GET all minions
const getAllMinions = (req, res, next) => {
  const minions = getAllFromDatabase('minions');
  req.payload = minions;
  next();
}

// POST new minion
const postNewMinion = (req, res, next) => {
  const proposedMinion = req.body;
  const createdMinion = addToDatabase('minions', proposedMinion);
  req.payload = createdMinion;
  res.status(201);
  next();
}

// GET one minion
const getOneMinion = (req, res, next) => {
  const id = req.params.minionId;
  const minion = getFromDatabaseById('minions', id);
  if (!minion) res.status(404).send();
  req.payload = minion;
  next();
}

// PUT one minion
const updateOneMinion = (req, res, next) => {
  const proposedUpdate = req.body;
  const updatedMinion = updateInstanceInDatabase('minions', proposedUpdate);
  if (!updatedMinion) res.status(404).send();
  req.payload = updatedMinion;
  next();
}

// DELETE one minion
const deleteOneMinion = (req, res, next) => {
  const id = req.params.minionId;
  const deleted = deleteFromDatabasebyId('minions', id);
  if (!deleted) res.status(404).send();
  res.status(204);
  next();
}

module.exports = {
  getAllMinions,
  postNewMinion,
  getOneMinion,
  updateOneMinion,
  deleteOneMinion,
}