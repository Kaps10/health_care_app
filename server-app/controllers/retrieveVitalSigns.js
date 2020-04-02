var client = require("../repo/mongodbConnection");

exports.retrieveVitalSignsRender = (req, res) => {
  const VitalSignsCollection = client.db("comp308Project").collection("vitalSigns");
  // check if the email and password are right
  VitalSignsCollection.find({userId:{$all :[req.body.userId]}}).then(
    data => {
      if (!data) {
        res.json({
          msg: "No Vital Signs for now"
        });
      } else {
        res.json({
          ...data,
          msg: 1
        });
      }
    },
    err => {
      console.log("err" + err);
    }
  );
};
