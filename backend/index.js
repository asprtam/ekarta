const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const uri = "uri do mongo"; // z wiadomych przyczyn nie podane

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 4000, () => {
    console.log('Your node js server is running');
});

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if(err) {
        console.log('unable to connect');
        console.log(err);
    } else {
        app.get("/characters", async (req, result) => {
            const collection = client.db("eKarta-Postaci").collection("collection");
            collection.find({}).toArray((error, res) => {
                if(error) {
                console.log('Cannot find');
                console.log(error);
                } else if(res.length) {
                result.status(200).json({
                    data: res
                });
                } else {
                console.log('no documents');
                }
            })
        });
        app.get("/basic", async (req, result) => {
            const collection = client.db("eKarta-Postaci").collection("collection");
            collection.find({}).project({ playername: 1, charactername: 1, characterage: 1, description: 1,  _id: 0}).toArray((error, res) => {
                if(error) {
                console.log('Cannot find');
                console.log(error);
                } else if(res.length) {
                result.status(200).json({
                    data: res
                });
                } else {
                console.log('no documents');
                }
            })
        });
        app.post("/nonattrib", async (request, response) => {
            const data = request.body;
            const collection = client.db("eKarta-Postaci").collection("collection");
            collection.find({playername: data.name}).project({ playername: 1, charactername: 1, characterage: 1, description: 1, lightwounds: 1, heavywounds: 1, woundlimit: 1, initiative: 1, willpowerpoints: 1, willpowerpointslimit: 1, advantages: 1, disadvantages: 1, defense: 1, characternationality: 1, weapons: 1, equipment: 1, equipmentcurrent: 1, equipmentmax: 1, property: 1, income: 1,  _id: 0}).toArray((error, res) => {
                if(error) {
                console.log('Cannot find');
                console.log(error);
                } else if(res.length) {
                    const reqdata = res[0];
                    response.json({
                        data: reqdata,
                    })
                } else {
                console.log('no documents');
                }
            })
        });
        app.post("/exp", async (request, response) => {
            const data = request.body;
            const collection = client.db("eKarta-Postaci").collection("collection");
            collection.find({playername: data.name}).project({ playername: 1,physicalexp: 1, mentalexp: 1, softskillsexp: 1, _id: 0}).toArray((error, res) => {
                if(error) {
                console.log('Cannot find');
                console.log(error);
                } else if(res.length) {
                    const reqdata = res[0];
                    response.json({
                        data: reqdata,
                    })
                } else {
                console.log('no documents');
                }
            })
        });
        app.post('/api', async (request, response) => {
            const data = request.body;
            const collection = client.db("eKarta-Postaci").collection("collection");
            let projectData = {};
            projectData[data.name] = data.value;
            collection.updateOne({playername: data.playername}, { $set: projectData }, (error) => {
                if(error) {
                console.log('Cannot update');
                console.log(error);
                }
            });
            response.json({
                success: true,
            })
        })
        app.post('/wounds', async (request, response) => {
            const data = request.body;
            const collection = client.db("eKarta-Postaci").collection("collection");
            let projectData = {};
            projectData[lightwounds] = data.valuelight;
            projectData[heavywounds] = data.valueheavy;
            collection.updateOne({playername: data.playername}, { $set: projectData }, (error) => {
                if(error) {
                console.log('Cannot update');
                console.log(error);
                }
            });
            response.json({
                success: true,
            })
        })
        app.post('/requestdata', async (request, response) => {
            const data = request.body;
            const collection = client.db("eKarta-Postaci").collection("collection");
            let projectData = {};
            projectData[data.attr] = 1;
            projectData["_id"] = 0;
            collection.find({playername: data.name}).project(projectData).toArray((error, res) => {
                if(error) {
                console.log('Cannot find');
                console.log(error);
                } else if(res.length) {
                    const reqdata = res[0][data.attr];
                    response.json({
                    data: reqdata,
                    })
                } else {
                console.log('no documents');
                }
            })
        });
    }
});

client.close();
