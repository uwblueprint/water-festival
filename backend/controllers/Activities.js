const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const activityRouter = express.Router()

var mongodb = require('mongodb');
var Activity = require('../models/Activity');

activityRouter.use(cors())
activityRouter.use(bodyParser.json());
activityRouter.use(bodyParser.urlencoded({
  extended: true
}));

activityRouter.get('/list', function(req, res) {
  Activity.find(function(err, activities) {
    if (err) {
      return res.status(500).json(err);
    }
    var mappedActivities = activities.map(q => q.toJSONFor());
    res.json(mappedActivities);
  });
});

activityRouter.get('/id/:id', function(req, res) {
  const id = req.params.id;
  Activity.findById(id, function(err, activity) {
		if (err) {
      return res.status(500).json(err);
    }
		if (!activity) {
      return res.json("Activity not found!");
    }
		res.json(activity);
	});
});

activityRouter.delete('/delete', function(req, res) {
  var ids = req.body.activityIDs.map(function(id) {
    return new mongodb.ObjectID(id);
  });

  Activity.deleteMany({
    _id: {
      $in: ids
    }
  }, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  res.send({
    "message": "Deleted activity!"
  });
});

activityRouter.post('/insert', function(req, res) {
  var activity = new Activity();
  activity.title = req.body.title;
  activity.description = req.body.description;
  activity.startTime = req.body.startTime;
  activity.endTime = req.body.endTime;
  activity.location = req.body.location;
  activity.grade = req.body.grade;
  activity.imageURI = req.body.imageURI;

  activity.save(function(err) {
    res.json({
      message: 'Activity created!',
      activity
    });
  });
});

activityRouter.post('/edit', function(req, res) {
  var activityToEdit = req.body;

  Activity.findById(activityToEdit.id, function(err, activity) {
    activity.set(activityToEdit);
    activity.save(function(err, updatedActivity) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: 'Activity updated!',
        activity: updatedActivity
      });
    });
  });
});

module.exports = activityRouter;
