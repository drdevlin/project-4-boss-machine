const express = require('express');
const minionsRouter = express.Router();

// Require in actions
const {
  sendResponse,
} = require('../actions/genericActions');

const {
  getAllMinions,
  postNewMinion,
  getOneMinion,
  updateOneMinion,
  deleteOneMinion,
} = require('../actions/minionsActions');

// Routes
minionsRouter.get('/', getAllMinions, sendResponse);
minionsRouter.post('/', postNewMinion, sendResponse);
minionsRouter.get('/:minionId', getOneMinion, sendResponse);
minionsRouter.put('/:minionId', updateOneMinion, sendResponse);
minionsRouter.delete('/:minionId', deleteOneMinion, sendResponse);


module.exports = minionsRouter;