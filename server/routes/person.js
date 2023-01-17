const crypto = require("crypto");
const express = require("express");
const { DB_COLLECTIONS } = require("../constants");

const routes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

routes.route("/person").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection(DB_COLLECTIONS.persons)
    .find({})
    .toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
});

// // This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection(COLLECTIONS.people)
//     .findOne(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

routes.route("/person").post(function (req, res) {
  const db_connect = dbo.getDb();

  req.body.uuid = crypto.randomUUID();

  const collection = db_connect.collection(DB_COLLECTIONS.persons);

  collection.insertOne(req.body, function (err) {
    if (err) {
      throw err;
    }
  });

  collection.find({}).toArray(function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// // This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   let newvalues = {
//     $set: {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level,
//     },
//   };
//   db_connect
//     .collection(COLLECTIONS.people)
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       response.json(res);
//     });
// });

// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection(COLLECTIONS.people)
//     .deleteOne(myquery, function (err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       response.json(obj);
//     });
// });

module.exports = routes;
