'use strict';

const app = require('./app')

// Declare default port
const PORT = process.env.PORT || 9000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
})