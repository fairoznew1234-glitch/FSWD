const mongoose = require("mongoose");

const dns = require("dns");

dns.setServers(["1.1.1.1","8.8.8.8"]);




const connectdb = async()=>{
    try{
        await mongoose.connect('mongodb+srv://fairoznew1234_db_user:Fairoz12@cluster0.7utulnw.mongodb.net/blogs');
        console.log("Mongodb Connected");
    }
    catch(error){
        console.error("DB connection failed :",error);
        process.exit(1);
    }
};

module.exports = connectdb ;