const mongoose = require('mongoose');
const {info} = require("../utils/Logger");
const URI = 'mongodb://localhost:27017/';
const connectDB = async ()=>{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}
info("DB successfully Connected");
module.exports = connectDB;