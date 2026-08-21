const express = require("express");

const app = express();
app.use(express.json());
const books = [
    {
        id: 1,
        title: "Seven Rivers",
        author: "Abd"
    },
    {
        id: 2,
        title: "Originals",
        author: "Assign"
    },
    {
        id: 3,
        title: "Vampire Diaries",
        author: "creseny"
    },
]
const Port = 3000;

// Get all the books
app.get("/books", (req, res) => {
    res.json(books);
})

// Get an individual Book
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id)
    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        })
    };
    res.json(book);
})

// Create a new Book
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({
            message: "Title and Author are required"
        })
    }
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
    };
    books.push(newBook);
    res.status(201).json(newBook);
})
app.put("/books/:id",(req, res)=> {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);
    if(!book) {
        return res.status(404).json({
            message: "Book not found"
        })
    };
    const { title, author } = req.body;
        if (!title || !author) {
        return res.status(400).json({
            message: "Title and Author are required"
        })
    }
    book.title = title;
    book.author = author;
    res.json(book);
})
app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        })
    }
    const bookIndex = books.indexOf(book);
    books.splice(bookIndex, 1);
    res.json({
        message: "Book deleted successfully"
    })
})


app.listen(Port, () => {
    console.log(`Server is running on ${Port}`)
})