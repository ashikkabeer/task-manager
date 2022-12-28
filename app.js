const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const db = process.env.MONGO_URI
const PORT = process.env.PORT

app.use(express.json());
app.use('/api/v1/tasks',tasks)

const start =  async() => {
    try {
        await connectDB(db);
        app.listen(PORT,() => {
            console.log(`server is connected to port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}
start();