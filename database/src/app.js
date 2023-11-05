const express = require('express');
require('dotenv').config();
require('./db/conn')

const bookRouter = require('./routers/books')
const paintRouter = require('./routers/paints')
const pictureRouter = require('./routers/pictures')
const sculptureRouter = require('./routers/sculptures')
const sketchRouter = require('./routers/sketches')
const userRouter = require('./routers/users')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bookRouter);
app.use(paintRouter);
app.use(pictureRouter);
app.use(sculptureRouter);
app.use(sketchRouter);
app.use(userRouter);

app.listen(port, (req, res) => {
    console.log("connection at", port);
})