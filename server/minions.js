const express = require('express');
const minionsRouter = express.Router();
const { 
    getAllFromDatabase, // (model) --> array | null
    getFromDatabaseById, // (model, id) --> instance | null
    addToDatabase, // (model, instance) --> instance | error
    updateInstanceInDatabase, // (model, updated instance) --> instance | null, error
    deleteFromDatabasebyId // (model, id) --> true | false
} = require('./db'); 

// Extract minionId parameter and attach it to request object
minionsRouter.param('minionId', (req, res, next, id) => {
    req.id = id;
    next();
}); 

// Get an array of all minions
minionsRouter.get('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions');
    res.send(minions);
});

// Get a single minion by ID
minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = getFromDatabaseById('minions', req.id);

    if (minion) { // valid ID
        res.send(minion);
    } else { 
        res.status(404).send();
    }
});

// Update a minion
minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);

    if (updatedMinion) { // valid ID
        res.send(updatedMinion); 
    } else {
        res.status(404).send();
    }  
});

module.exports = minionsRouter;