const http = require("http");

const tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        completed: true
    },
    {
        id: 2,
        title: "Build an API",
        completed: false
    },
    {
        id: 3,
        title: "Learn MongoDB",
        completed: false
    }
];

const server = http.createServer((req, res) => {
    if (req.url === "/api/tasks/1") {
        const task = tasks.find((task) => task.id === 1);
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(task))
    }
})

server.listen(3000, ()=>{
    console.log("server is running on port 3000")
})