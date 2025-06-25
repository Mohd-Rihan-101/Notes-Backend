const express = require('express');
const app = express();
require('./db');

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const notesRouter = require('./router/notesRouter');
app.use('/notes', notesRouter);


app.get('/', (req,res)=>{
    res.send("Welcome to Our Website");
})

app.listen(3000,()=>{
    console.log("server listening on PORT 3000");
})