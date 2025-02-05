const express = require('express');
const connectDB = require('./db/db');
const userRoute = require('./routes/user.route');
const documentRoute = require('./routes/document.route');
const app = express();
const cors = require('cors');
const http = require('http');
const { socketConnection } = require('./websockets/socketConnection');
require('dotenv').config();

const server = http.createServer(app);

connectDB()

socketConnection(server);

app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use("/document", documentRoute)

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
