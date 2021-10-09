const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express ();

// import routes
const postRoutes = require('./routes/posts')

// app middleware
app.use(bodyParser.json());
app.use(cors());

// route middleware

app.use(postRoutes);

const PORT = 9000

const DB_URL="mongodb+srv://<your DB account>:<your Password>@cluster0.eyxhl.mongodb.net/<your DB name>?retryWrites=true&w=majority";

mongoose.connect (DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>{
    console.log("DB Connected");
}).catch ((err) => {
    console.log("DB connection error", err)
})

app.listen(PORT, () =>{
    console.log(`Server is runing on ${PORT}`)
})