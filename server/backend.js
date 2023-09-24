// server/backend.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

const voteList = []

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());



app.get("/api", (req, res) => {
    res.json({ message: JSON.stringify(voteList) });
})

app.post("/api/vote", (req, res) => {
    const postData = req.body; // Access the parsed POST data
    voteList.push(postData)
    res.status(200).json({ message: 'Request was successful' });
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    const indexFile = path.resolve(__dirname, '../build', req.originalUrl);
    res.sendFile(indexFile);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
