const http = require('http')
const server = http.createServer((req,res)=> {
    if(req.url=="/"){
        res.end("Welcome to our home page")
    }
    else if(req.url==="/about") {
        res.end("About page")
    }
    else{
        res.end('<h1>Oops We can seem to find the webpage</h1><a href="/">Go Back</a>')
    }
})

server.listen(5000);