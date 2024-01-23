const http = require('http')
const server = http.createServer((req, res)=>{
    const url = req.url;
    //Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})  // Return status code
        res.write('<h1>Homepage</h1>')
        res.end()
    }
    // About page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})  // Return status code
        res.write('<h1>About page</h1>')
        res.end()
    }
    // 404 resource not found
    else{
        res.writeHead(404,{'content-type':'text/html'})  // Return status code
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})
server.listen(5555)