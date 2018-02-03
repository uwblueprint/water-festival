const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const eventRouter = express.Router()

var mongodb = require('mongodb');
var Event = require('../models/Event');

eventRouter.use(cors())
eventRouter.use(bodyParser.json());
eventRouter.use(bodyParser.urlencoded({
  extended: true
}));

eventRouter.get('/list', function(req, res) {
  Event.find(function(err, events) {
    if (err) {
      return res.status(500).json(err);
    }
    var mappedEvents = events.map(q => q.toJSONFor());
    res.json(mappedEvents);
  });
});

eventRouter.get('/event', function(req, res) {
  var eventToGet = req.query;
  Event.findById(eventToGet.id, function(err, event) {
		if (err) {
      return res.status(500).json(eventToGet);
    }
		if (!event) {
      return res.json("Event not found!");
    }
		res.json(event);
	});
});

eventRouter.delete('/delete', function(req, res) {
  var ids = req.body.eventIDs.map(function(id) {
    return new mongodb.ObjectID(id);
  });

  Event.deleteMany({
    _id: {
      $in: ids
    }
  }, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  res.send({
    "message": "Deleted event!"
  });
});

eventRouter.post('/insert', function(req, res) {
  var event = new Event();
  event.title = req.body.title;
  event.description = req.body.description;
  event.startTime = req.body.startTime;
  event.endTime = req.body.endTime;
  event.location = req.body.location;
  event.grade = req.body.grade;
  event.imageURI = req.body.imageURI;

  event.save(function(err) {
    res.json({
      message: 'Event created!',
      event
    });
  });
});

eventRouter.post('/edit', function(req, res) {
  var eventToEdit = req.body;

  Event.findById(eventToEdit.id, function(err, event) {
    event.set(eventToEdit);
    event.save(function(err, updatedEvent) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: 'Event updated!',
        event: updatedEvent
      });
    });
  });
});

module.exports = eventRouter;
