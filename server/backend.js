// server/backend.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (request, response) => response.json({clients: clientConnections.length}));

let clientConnections = [];

let dataMap = initDataMap()
const action={DASHBOARD: 'DASHBOARD', NEW_ROUND:'NEW_ROUND'}

function initDataMap() {
    return {
        users: {
            Ramesh: {point: undefined, role: 'dev'},
            Haitang: {point: undefined, role: 'dev'},
            Feili: {point: undefined, role: 'dev'},
            Gerrit: {point: undefined, role: 'dev'},
            Arslan: {point: undefined, role: 'dev'},
            Sachin: {point: undefined, role: 'dev'},
            Harsh: {point: undefined, role: 'dev'},
            Ashwini: {point: undefined, role: 'dev'},
            Manisha: {point: undefined, role: 'qa'},
            Richa: {point: undefined, role: 'qa'},
            Vijay: {point: undefined, role: 'qa'},
        },
        isShowDashboard: false,
        action: undefined,
    }
}

app.get("/api/subscribe", (request, response) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    response.writeHead(200, headers);


    response.write(`data: ${JSON.stringify(dataMap)}\n\n`);

    const clientId = Date.now();

    const newClient = {
        id: clientId,
        response
    };

    clientConnections.push(newClient);

    request.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clientConnections = clientConnections.filter(client => client.id !== clientId);
    });
})

app.post("/api/vote", (req, res) => {
    const {user, point} = req.body; // Access the parsed POST data
    if (!dataMap.users[user]) {
        res.status(400).json({message : 'Could not identify user'})
        return
    }
    dataMap.users[user].point = point
    res.status(200).json({message: 'OK'});
    notifyAll()
})

app.post("/api/show-dashboard", (req, res) => {
    const {user} = req.body; // Access the parsed POST data
    if (!dataMap.users[user]) {
        res.status(400).json({message : 'Could not identify user'})
        return
    }
    dataMap.action = action.DASHBOARD
    dataMap.isShowDashboard=true
    res.status(200).json({message: 'OK'});
    notifyAll()
})

app.post("/api/new-round", (req, res) => {
    const {user} = req.body; // Access the parsed POST data
    if (!dataMap.users[user]) {
        res.status(400).json({message : 'Could not identify user'})
        return
    }
    dataMap.action = action.NEW_ROUND
    res.status(200).json({message: 'OK'});
    notifyAll()
})

app.post("/api/reset", (req, res) => {
    dataMap = initDataMap()
    notifyAll()
    res.status(200).json({message: 'OK'});
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    const indexFile = path.resolve(__dirname, '../build', req.originalUrl);
    res.sendFile(indexFile);
});

function notifyAll() {
    clientConnections.forEach(client => client.response.write(`data: ${JSON.stringify(dataMap)}\n\n`))
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
