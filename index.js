const express = require('express')
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://saikat:ORpUOn30w5ayyVc8@react-blog.wwmq1.mongodb.net/testDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongoose Connected");
}).catch((err) => {
    console.log('error ', err);
})

app.get('/', (req, res) => {
    res.send("Hello  World")
})

app.listen(5000);
// pass=ORpUOn30w5ayyVc8