const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

const mydb = mongoose.connection;
mydb.on('error', error => console.log(error));
mydb.once('open', () => {
    console.log("Db connected");
});
