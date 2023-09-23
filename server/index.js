// server/index.js
const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

const voteList = []

app.use(express.static(path.join(__dirname, '../build')));



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


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    const indexFile = path.resolve(__dirname, '../build', req.originalUrl);
    res.sendFile(indexFile);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
