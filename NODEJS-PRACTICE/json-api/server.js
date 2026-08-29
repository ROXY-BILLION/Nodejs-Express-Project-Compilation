const http = require("http");

const products = [
    {
        id: 1,
        name: "Shoes",
        price: 500000
    },
    {
        id: 2,
        name: "Laptop",
        price: 320000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 15000
    },
];
const server = http.createServer((req, res) => {
    if (req.url === "/api/products") {
        res.writeHead(200, {
        "content-Type": "application/json"
        });
        res.end(JSON.stringify(products));
    }
})

server.listen(3000,()=> {
    console.log("server is running on port 3000")
})