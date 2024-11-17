//const express = require('express')
//const app = express()
//const port = 3000
//app.get('/', (req, res) => {
//res.send('Backend!')
//})
//app.listen(port, () => {
//console.log(`backend listening on port ${port}`)
//})
// import express from 'express'
// import movies from "./routes/movies.js";
// import users from "./routes/users.js";
// const app = express()
// const port = 3000
// app.use(express.json());
// // Load the /movies routes
// app.use("/movies", movies);
// // Load the /users routes
// app.use("/users", users);
// app.listen(port, () => {
// console.log(`backend listening on port ${port}`)
// })
import express from 'express'
import books from "./routes/books.js";
import users from "./routes/users.js";
import comments from "./routes/comments.js";
import livrarias from "./routes/livrarias.js";

const app = express()
const port = 3000

app.use(express.json());

app.get('/',(req, res) => {

    res.send('Backend!')
}
)
// Load the /movies routes
app.use("/books", books);

app.use("/comments", comments);

app.use("/livrarias", livrarias);

// Load the /users routes
app.use("/users", users);

app.listen(port, () => {
    console.log('backend listening on port ${port}')
})