// server/index.js

const express = require("express");

const PORT =  3001;

const app = express();

const voteList = []

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.post("/api/vote", (req, res) => {
    const postData = req.body; // Access the parsed POST data

    voteList.push(postData)

    // Process the received data
    console.log('Received POST data:', voteList);

    // Send a response
    res.send('Received and processed the vote request.');
})