const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const connectDB = require('./db/config');
const todoRoutes = require('./controllers/todoRoutes')
const {info} = require('./utils/Logger');

connectDB();
app.use(cors());
app.use((req, res, next) => {
    /** Log the req */
    info(
        `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    res.on("finish", () => {
        /** Log the res */
        info(
            `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
        );
    });
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/todo',todoRoutes);

app.listen('3000',()=>{
    info("Listening at PORT:3000");
})
