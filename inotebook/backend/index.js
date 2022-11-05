const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

// Connecting to the server
connectToMongo();

const app = express()
const port = 5000


// middleware
app.use(express.json());
app.use(cors());

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at  http://localhost:${port}`)
})