const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    mongoose.connect(MONGO_URL);
}

app.get("/", (req,res)=>{
    res.send("Hii, I'm root!");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})