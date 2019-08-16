const express = require('express')
const path = require('path')

// Initialize the server
const app = express()

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
});

module.exports = app