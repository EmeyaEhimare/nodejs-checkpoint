const http = require('http')
const PORT = 3000

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/plain'})
    res.end("hello world")
    
})

server.listen(PORT, () => {
    console.log("server running", PORT)
})


