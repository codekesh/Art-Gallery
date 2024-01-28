const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:3000', method: ["GET", "POST", "PUT", "DELETE"] }));

require('dotenv').config();
require('./db/conn')

const bookRouter = require('./routers/books')
const paintRouter = require('./routers/paints')
const pictureRouter = require('./routers/pictures')
const sculptureRouter = require('./routers/sculptures')
const sketchRouter = require('./routers/sketches')
const userRouter = require('./routers/users')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')

const port = process.env.PORT || 8000

app.use(express.json())
app.use(bookRouter);
app.use(paintRouter);
app.use(pictureRouter);
app.use(sculptureRouter);
app.use(sketchRouter);
app.use(userRouter);
app.use(categoryRouter);
app.use(productRouter);

app.listen(port, (req, res) => {
    console.log("connection at", port);
})
