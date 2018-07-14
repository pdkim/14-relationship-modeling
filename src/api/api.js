'use strict';

import express from 'express';
const router = express.Router();

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

let sendJSON = (res, data) => {
  res.status(200);
  res.json(data);
};

//GET ONE
router.get('/api/v1/:model/:id', (req, res, next) => {
  req.model.findById(req.params.id)
    .populate('employee')
    .exec()
    .then(data => {
      if (data === null) {
        res.status(404).send('Not Found');
      }
      else {
        sendJSON(res, data);
      }
    })
    .catch(next);
});

//GET ALL
router.get('/api/v1/:model', (req, res, next) => {
  req.model.find({})
    .populate('employee')
    .exec()
    .then(data => sendJSON(res, data))
    .catch(next);
});

//DELETE
router.delete('/api/v1/:model/:id', (req, res, next) => {
  req.model.findByIdAndDelete(req.params.id)
    .then(data => {
      if (data === null) {
        res.status(400).send('Bad request');
      }
      else {
        req.model.findByIdAndDelete(req.params.id)
          .then(() => {
            let data = `${req.params.id} is deleted.`;
            sendJSON(res, data);
          })
          .catch(next);
      }
    })
    .catch(next);
});

//POST
router.post('/api/v1/:model', (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send('Bad request');
  }
  else {
    let record = new req.model(req.body);

    record.save()
      .then(data => sendJSON(res, data))
      .catch(next);
  }
});

router.put('/api/v1/:model/:id', (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send('Bad request');
  }
  else {
    req.model.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        sendJSON(res, data);
      })
      .catch(next);
  }
});


export default router;