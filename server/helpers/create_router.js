const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // INDEX
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .find({ _id: ObjectID(id) })
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // UPDATE
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .updateOne({ _id: ObjectID(id)}, { $set: {been_there: req.body.status} })
    .then(() => {
      collection
      .find()
      .toArray()
      .then((docs) => {
        res.json(docs)
      });
    });
  })

  return router;
};

const returnAll = function(res, collection) {

}

module.exports = createRouter;
