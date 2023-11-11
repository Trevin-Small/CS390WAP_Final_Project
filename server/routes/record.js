const express = require("express");
 
// routes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const routes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
routes.route("/get_recipes").get(function (req, res) {
 let db_connect = dbo.getDb("recipes");
 db_connect
   .collection("recipes")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will help you get a single record by id
routes.route("/get_recipes/:_id").get(function (req, res) {
  console.log("here");
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("recipes")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
module.exports = routes;