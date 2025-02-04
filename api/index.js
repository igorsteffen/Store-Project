const express = require("express");
const mysql = require("mysql2/promise");
// promise --->  external resource you will use promise

const api = express();
const port = 3000;

api.use(express.json()); // middleware

// first endpoint
/// HTTP VERBS: POST (CREATE), GET (TO GET), PUT (UPDATE), PATCH(PARTIAL UPDATE), DELETE,  OPTIONS
api.get("/", (req, res) => {
    res.status(200).json({message: "API is running"});
});


// Runing
api.listen(port, () => {
    console.log(`The server is runing, PORT ${port}`);
});