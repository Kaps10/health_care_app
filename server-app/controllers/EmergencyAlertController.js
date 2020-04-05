var client = require("../repo/mongodbConnection");

exports.sendEAlert = (req, res) => {
  const requestData= req.body;
  const alertCollection = client.db("comp308Project").collection("EAlerts");
    // console.log(requestData);

  alertCollection.insertOne(requestData).then(
    data => {
      res.json({
        msg: "Send Alert successful." 
      });
    },
    err => {
      res.json({
        msg: "unable to insert alert to database."
      });
    }
  );
};
