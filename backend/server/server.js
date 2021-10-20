const express = require('express')
const db = require("../db/index");


const app = express()
const port = 3002;


app.listen(port, () => {
    console.log(`Bon compte listening at http://localhost:${port}`);
})