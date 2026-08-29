const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from my backend");
})

server.listen(3000,()=> {
    console.log("server is running on port 3000")
})