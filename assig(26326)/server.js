const express = require("express");

const app = express();

app.use(express.json());

let authors = [];
let Books = [];

let authorid = 1;
let Bookid = 1;

app.post("/api/authors",(req,res)=>{
    const author ={
        id:authorid++,
        name:req.body.name
    };
    authors.push(author);
    res.status(201).json(author);
});

app.get("/api/authors",(req,res)=>{
    res.json(authors);
});

app.get("/api/authors/:id",(req,res)=>{
    const author = authors.find(a=>a.id == req.params.id);
    if(!author) return res.status(400).json({message:"Author not Found"});
    res.json(author);
});

app.put("/api/authors/:id",(req,res)=>{
    const author = authors.find(a =>a.id = req.params.id);
    if(!author) return res.status(400).json({message:"authornotfound"});
    author.name = req.body.name|| author.name;
    res.json(author);
})

app.delete("/api/authors/:id",(req,res)=>{
    const author = authors.filter(a=>a.id!=req.params.id);
    res.json({message:"authordeleted"})
});


//books

app.post("/api/books",(req,res)=>{
    const author = authors.find(a=>a.id == req.params.id);
    if(!author) return res.status(400).json({message:"invalid authorid"});
    
    const book ={
        id:Bookid++,
        title :req.body.title,
        authorid : req.body.authorid
    };
    Books.push(book);
    res.status(201).json(book);
});

app.get("/api/books",(req,res)=>{
    const result = Books.map(books=>{
        const author = authors.find(a=>a.id==Bookid.authorid);
        return {...books,author}
    })
    res.json(result);
})

// we can also write code for update and delete the book


app.listen(3000,()=>{
    console.log("server running on port 3000");
});