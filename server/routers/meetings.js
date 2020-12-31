const express = require('express');
const meetingsRouter = express.Router();


// Require in actions
const {
  validateBody,
  sendResponse,
} = require('../actions/genericActions');

const {
  getAllMeetings,
  postMeeting,
  deleteAllMeetings,
} = require('../actions/meetingsActions');

// Routes
meetingsRouter.get('/', getAllMeetings);

meetingsRouter.post('/', postMeeting);

meetingsRouter.delete('/', deleteAllMeetings);

meetingsRouter.use(sendResponse);


module.exports = meetingsRouter;