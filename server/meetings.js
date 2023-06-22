const express = require('express');
const meetingsRouter = express.Router();
const { 
    createMeeting,
    getAllFromDatabase, // (model) --> array | null
    addToDatabase, // (model, instance) --> instance | error
    deleteAllFromDatabase // (model) --> empty array
} = require('./db'); 

// Get all meetings
meetingsRouter.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings');

    res.send(meetings);
});

// Create a new meeting
meetingsRouter.post('/', (req, res, next) => {
    const meeting = addToDatabase('meetings', createMeeting());

    res.status(201).send(meeting);
});

// Delete all meetings
meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');

    res.status(204).send();
});

module.exports = meetingsRouter;