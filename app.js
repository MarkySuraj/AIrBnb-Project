const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req,res)=>{
    res.send("Hii, I'm root!");
});

app.get("/testListing", async (req,res)=>{
    let sampleListing = new Listing({
        title: "My new Villa",
        description:"By the beach",
        price: 1200,
        location: "Haldwani, Uttarakhand",
        Country: "India",
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Successful testing");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})