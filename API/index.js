'use strict';
const { MongoClient} = require("mongodb");
const express = require("express");
const fs = require('fs');
const { find } = require("tslint/lib/utils");

const url = "mongodb+srv://<Username>:<Password>@moodtunes.1up6b.mongodb.net/<DBname>?retryWrites=true&w=majority"
const client = new MongoClient(url, {useNewUrlParser: true});
var inputData;


async function run(filepath) {
    try{ 
        let daData = fs.readFileSync(filepath);
        inputData = JSON.parse(daData);
        console.dir(inputData);
        
    interactUserData("find", inputData);
    
}
    catch(err){
        console.log(err.stack);
    }
    finally{
        await client.close();
    }
}

async function interactUserData(action, document) {
    await client.connect().then(() => {console.log("connnected to Mongo DB cluster")})
    const db = client.db("MoodTunes");
    const col = db.collection("UserInput");
    if(action == "add")
    {
        await col.insertOne(document);
    }
    if(action == "find")
    {
     const outputQuery = await col.findOne();
     console.log(outputQuery);

    }
}

function aCall() {
    const app = express();
    try{
        var get = app.get('/', (req, res) => {res.send(inputData["name"]);})
        app.listen(4010, () => {console.log('server doing the listen');})
    }
    catch(err)
    {
        console.log(err.stack);
    }
}

run("assets/InputList.json").catch(console.dir);
aCall();





