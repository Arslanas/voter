// server/backend.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());


const dataMap = {
    Ramesh: {point: undefined},
    Haitang: {point: undefined},
    Feili: {point: undefined},
    Gerrit: {point: undefined},
    Arslan: {point: undefined},
    Sachin: {point: undefined},
    Harsh: {point: undefined},
    Ashwini: {point: undefined},
    Manisha: {point: undefined},
    Richa: {point: undefined},
    Vijay: {point: undefined},
}

app.get("/api", (req, res) => {
    res.json({map: dataMap});
})

app.post("/api/vote", (req, res) => {
    const {user, point} = req.body; // Access the parsed POST data
    if (!dataMap[user]) {
        res.status(400).json({message : 'Could not identify user'})
        return
    }
    dataMap[user].point = point
    res.status(200).json({message: 'OK'});
})

app.post("/api/reset", (req, res) => {
    Object.values(dataMap).forEach(user=> user.point=undefined)
    res.status(200).json({message: 'OK'});
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    const indexFile = path.resolve(__dirname, '../build', req.originalUrl);
    res.sendFile(indexFile);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
