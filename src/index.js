const express = require('express');
const route = require('./Routes/route');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer')


app.use(express.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://BittuMishra:ZsLbBdUnCK.2jta@cluster0.2v1vzde.mongodb.net/WebelightDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)


app.listen( 3000, function () {
    console.log('Express app running on port ' + 3000)
});