const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

let counter =0;

app.get("/", (req, res) =>{
    counter++;
    console.log(`Request number ${counter}`);
    res.send("hello world!");
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});