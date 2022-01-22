const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url ==='/'){
        res.end('Welcome to home page')
    }
    else if(req.url === '/about'){
        res.end(`<h1>Heading About</h1`)
    }else{
        res.end('I dont get it')
    }
    
    res.end();
})

server.listen(5000)