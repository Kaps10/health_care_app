// import express, cors and body-parser
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://db-access:Mip9qbS1B42vagEQ@cluster0-ssdog.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());

client.connect(err => {
  if (err) {
    console.log("unable to connect to db");
  } else {
    console.log("connected to db");
  }
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

// registration api
app.post("/signup", function(req, res) {
  const userInfoData = req.body;
  // get userCollection
  const userCollection = client.db("comp308Project").collection("users");
  // check if the email exsits in db
  userCollection.findOne({ userName: userInfoData.userName }).then(
    data => {
      if (!data) {
        // insert data to database
        userCollection.insertOne(userInfoData).then(
          data => {
            res.json({
              msg: 1 // succeed
            });
          },
          err => {
            res.json({
              msg: "unable to insert data to database."
            });
          }
        );
      } else {
        res.json({
          msg: "This user name has been registered, please input again."
        });
      }
    },
    err => {
      console.log("err" + err);
    }
  );
});

app.listen(8500, function() {
  console.log("Server app listening on http://localhost:8500/");
});
