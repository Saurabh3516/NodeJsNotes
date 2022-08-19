const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url==='/')
        res.end("Welcome to the home page");

    else if(req.url === '/about')
        res.end("Welcome to the about page")

    else {
        res.end(
            `<h1>Error 404</h1>
            <h1>Oops</h1>
            <p> Seems that the page you are looking for is not here</p>
            <a href='/'>Back to Home</a>`
        )
    }
})

server.listen(5000, ()=>{
    console.log('server Started')
});
