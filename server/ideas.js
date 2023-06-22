const express = require('express');
const ideasRouter = express.Router();
const { 
    getAllFromDatabase, // (model) --> array | null
    getFromDatabaseById, // (model, id) --> instance | null
    addToDatabase, // (model, instance) --> instance | error
    updateInstanceInDatabase, // (model, instance) --> instance | null, error
    deleteFromDatabasebyId // (model, id) --> true | false
} = require('./db'); 

// Get all ideas
ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas');

    res.send(ideas);
});

module.exports = ideasRouter;