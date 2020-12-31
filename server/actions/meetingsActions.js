const { 
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
  createMeeting,
} = require('../db/db');

// GET all meetings
const getAllMeetings = (req, res, next) => {
  const meetings = getAllFromDatabase('meetings');
  req.payload = meetings;
  next();
}

// POST new meeting
const postMeeting = (req, res, next) => {
  const newMeeting = createMeeting();
  const meeting = addToDatabase('meetings', newMeeting);
  req.payload = meeting;
  res.status(201);
  next();
}

// DELETE all meetings
const deleteAllMeetings = (req, res, next) => {
  try {
    deleteAllFromDatabase('meetings');
  } catch(error) {
    next(error);
  }
  res.status(204);
  next();
}

module.exports = {
  getAllMeetings,
  postMeeting,
  deleteAllMeetings,
}