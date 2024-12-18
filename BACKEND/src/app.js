// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.set('port', 3005);

// app.use(cors());
// app.use(express.json());

// const userRouter = require("./routes/usersRouter");
// const conteudoRouter = require('./routes/conteudoRouter')

// app.use('/api', userRouter);
// app.use('/api', conteudoRouter);

// module.exports = app;
const express = require("express");
const cors = require("cors");

const app = express();
app.set('port', process.env.PORT);

app.use(cors());
app.use(express.json());
const userRouter = require("./routes/usersRouter");
const conteudoRouter = require('./routes/conteudoRouter');


app.use('/api', userRouter);
app.use('/api', conteudoRouter);
app.use('/uploads', express.static('uploads'));

module.exports = app;

