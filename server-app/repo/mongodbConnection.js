const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://DB_Access:JkXqUQofPbQ5ivxa@cluster0-frq1i.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.log("unable to connect to db");
  } else {
    console.log("connected to db");
  }
});

module.exports = client;
