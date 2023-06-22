const express = require('express');
const meetingsRouter = express.Router();
const { 
    createMeeting,
    getAllFromDatabase, // (model) --> array | null
    getFromDatabaseById, // (model, id) --> instance | null
    addToDatabase, // (model, instance) --> instance | error
    updateInstanceInDatabase, // (model, instance) --> instance | null, error
    deleteFromDatabasebyId, // (model, id) --> true | false
    deleteAllFromDatabase // (model) --> empty array
} = require('./db'); 

// Get all meetings
meetingsRouter.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings');

    res.send(meetings);
});

module.exports = meetingsRouter;