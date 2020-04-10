var client = require("../repo/mongodbConnection");
var ObjectId = require('mongodb').ObjectID;

exports.sendSymptomList = (req, res) => {
  const requestData= req.body;
  const diseaseCollection = client.db("comp308Project").collection("disease");
  console.log(requestData);
  var query = { symptoms:{$all:requestData} };
  diseaseCollection.find(query)
  .toArray()
  .then(
    data => {
      res.json({
        msg: 1,
        dataArr:data
      });
    },
    err => {
      res.json({
        msg: "unable to insert alert to database."
      });
    }
  );
};