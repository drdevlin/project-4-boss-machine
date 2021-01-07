const express = require('express');
const ideasRouter = express.Router();

// Require in actions
const {
  sendResponse,
} = require('../actions/genericActions');

const checkMillionDollarIdea = require('../actions/checkMillionDollarIdea');

const {
  getAllIdeas,
  postNewIdea,
  getOneIdea,
  updateOneIdea,
  deleteOneIdea,
} = require('../actions/ideasActions');

// Routes
ideasRouter.get('/', getAllIdeas, sendResponse);
ideasRouter.post('/', checkMillionDollarIdea, postNewIdea, sendResponse);
ideasRouter.get('/:ideaId', getOneIdea, sendResponse);
ideasRouter.put('/:ideaId', updateOneIdea, sendResponse);
ideasRouter.delete('/:ideaId', deleteOneIdea, sendResponse);

module.exports = ideasRouter;