const http = require('http');

const port = 1903;

http
.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text\html'})
    response.write("<h1>Hi Pratham</h1>");
    response.end();
})
.listen(port,()=>{
    console.log(`node js server started on port  ${port}`);
});

// http://localhost/1903