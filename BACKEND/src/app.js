const express = require("express");
const cors = require("cors");
const app = express();
app.set('port', 3005);

app.use(cors());
app.use(express.json());

const userRouter = require("./routes/usersRouter");

app.use('/api', userRouter);

module.exports = app;
