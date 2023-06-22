const express = require('express');
const ideasRouter = express.Router();
const { 
    getAllFromDatabase, // (model) --> array | null
    getFromDatabaseById, // (model, id) --> instance | null
    addToDatabase, // (model, instance) --> instance | error
    updateInstanceInDatabase, // (model, instance) --> instance | null, error
    deleteFromDatabasebyId // (model, id) --> true | false
} = require('./db'); 

// Extract ideaId parameter and attach it to request object
ideasRouter.param('ideaId', (req, res, next, id) => {
    req.id = id;
    next();
});

// Get all ideas
ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas');

    res.send(ideas);
});

// Get a single idea
ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = getFromDatabaseById('ideas', req.id);

    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send();
    }    
});

module.exports = ideasRouter;