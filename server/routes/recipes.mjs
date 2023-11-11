import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from 'mongodb';

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/get_recipes", async (req, res) => {
  let collection = await db.collection("recipes");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/get_recipes/:_id", async (req, res) => {
  let collection = await db.collection("recipes");
  let query = {_id: ObjectId(req.params._id)};
  let result = await collection.findOne(query);

  if (!result) res.redirect('/not_found').status(404);
  else res.send(result).status(200);
});

export default router;