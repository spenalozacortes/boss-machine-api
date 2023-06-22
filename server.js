const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./server/api');
const PORT = process.env.PORT || 4001;

// Add middleware for parsing request bodies
app.use(bodyParser.json());

// Mount apiRouter
app.use('/api', apiRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});