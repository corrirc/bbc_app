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
    console.log(req.body);
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

  // COUNTRIES
  router.get('/countries/:country', (req, res) => {
    const country = req.params.country;
    collection
      .find({ landmark_location: country })
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // CONTINENTS
  router.get('/continents/:continent', (req, res) => {
    const continent = req.params.continent;
    collection
      .find({ continent: continent })
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createRouter;
