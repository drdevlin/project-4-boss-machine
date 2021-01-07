const { 
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('../db/db');

// GET all ideas
const getAllIdeas = (req, res, next) => {
  const ideas = getAllFromDatabase('ideas');
  req.payload = ideas;
  next();
}

// POST new idea
const postNewIdea = (req, res, next) => {
  const proposedIdea = req.body;
  const createdIdea = addToDatabase('ideas', proposedIdea);
  req.payload = createdIdea;
  res.status(201);
  next();
}

// GET one idea
const getOneIdea = (req, res, next) => {
  const id = req.params.ideaId;
  const idea = getFromDatabaseById('ideas', id);
  if (!idea) {
    res.status(404).send();
  } else {
    req.payload = idea;
    next();
  }
  
}

// PUT one idea
const updateOneIdea = (req, res, next) => {
  const proposedUpdate = req.body;
  const updatedIdea = updateInstanceInDatabase('ideas', proposedUpdate);
  if (!updatedIdea) {
    res.status(404).send();
  } else {
    req.payload = updatedIdea;
    next();
  } 
}

// DELETE one idea
const deleteOneIdea = (req, res, next) => {
  const id = req.params.ideaId;
  const deleted = deleteFromDatabasebyId('ideas', id);
  if (!deleted) {
    res.status(404).send();
  } else {
    res.status(204);
    next();
  }
}

module.exports = {
  getAllIdeas,
  postNewIdea,
  getOneIdea,
  updateOneIdea,
  deleteOneIdea,
}