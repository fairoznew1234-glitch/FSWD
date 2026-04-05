const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const dns = require("dns");
const { type } = require("os");
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
connectdb();

const userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const User = mongoose.model("User",userschema);

const postschema = mongoose.Schema({
    title:String,
    content:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
const Posts = mongoose.model("Posts",postschema);

const commentSchema = new mongoose.Schema({
  text: String,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comments = mongoose.model("Comments",commentSchema);

app.post("/User",async(req,res)=>{
    const user = await User.create(req.body);
    res.json(user);
})

app.post("/Post",async(req,res)=>{
    const post = await Posts.create(req.body);
    res.json(post);
})

app.post('/comments', async (req, res) => {
  const comment = await Comments.create(req.body);
  res.json(comment);
});

app.get('/comments', async (req, res) => {
  const comments = await Comment.find()
    .populate('User')
    .populate('Post');

  res.json(comments);
});


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})



