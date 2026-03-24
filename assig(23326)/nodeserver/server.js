const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.write("this home page");
    }
    else if(req.url==="/about"){
        res.write("this about page");
    }
    else if(req.url==="/contact"){
        res.write("this contact page");
    }
     else{
        res.write("page not found");
    }
    res.end();
});

server.listen(3000,()=>{
    console.log("server is running at port 3000");
})