const express = require('express');
const ideasRouter = express.Router();
const { 
    getAllFromDatabase, // (model) --> array | null
    getFromDatabaseById, // (model, id) --> instance | null
    addToDatabase, // (model, instance) --> instance | error
    updateInstanceInDatabase, // (model, instance) --> instance | null, error
    deleteFromDatabasebyId // (model, id) --> true | false
} = require('./db'); 
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

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

// Update an idea
ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);

    if (updatedIdea) {
        res.send(updatedIdea);
    } else {
        res.status(404).send();
    }
});

// Add a new idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);

    res.status(201).send(newIdea);
});

// Delete an idea
ideasRouter.delete('/:ideaId', (req, res, next) => {
    const isDeleted = deleteFromDatabasebyId('ideas', req.id);

    if (isDeleted) {
       res.status(204).send(); 
    } else {
        res.status(404).send();
    }
});

module.exports = ideasRouter;