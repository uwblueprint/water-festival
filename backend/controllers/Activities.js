const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
<<<<<<< HEAD
<<<<<<< HEAD
var mongodb = require('mongodb');
var Activity = require('../models/Activity');

const activityRouter = express.Router()

=======
=======
>>>>>>> 9c727a9d9112ff102fb945452e4cbb49ca1d2cff
const activityRouter = express.Router()

var mongodb = require('mongodb');
var Activity = require('../models/Activity');

<<<<<<< HEAD
>>>>>>> Renamed all events to activities, added new activites schema
=======
>>>>>>> 9c727a9d9112ff102fb945452e4cbb49ca1d2cff
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "message": "Deleted activity/activities!"
=======
    "message": "Deleted activity!"
>>>>>>> Renamed all events to activities, added new activites schema
=======
    "message": "Deleted activity/activities!"
>>>>>>> Fixed creation of new activity
=======
    "message": "Deleted activity/activities!"
>>>>>>> Fixed error message for deleting
=======
    "message": "Deleted activity/activities!"
>>>>>>> 9c727a9d9112ff102fb945452e4cbb49ca1d2cff
  });
});

activityRouter.post('/insert', function(req, res) {
  var activity = new Activity();
  activity.title = req.body.title;
  activity.description = req.body.description;
  activity.startTime = req.body.startTime;
  activity.endTime = req.body.endTime;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Fixed error message for deleting
=======
>>>>>>> 9c727a9d9112ff102fb945452e4cbb49ca1d2cff
  activity.station = req.body.station;
  activity.grade = req.body.grade;
  activity.imageURI = req.body.imageURI;
  activity.isNewActivity = req.body.isNewActivity;
  activity.isOpen = req.body.isOpen;
  activity.state = req.body.state;

  activity.save(function(err) {
    if (err){
      return res.status(500).json(err);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  activity.location = req.body.location;
=======
  activity.station = req.body.station;
>>>>>>> Fixed creation of new activity
  activity.grade = req.body.grade;
  activity.imageURI = req.body.imageURI;
  activity.isNewActivity = req.body.isNewActivity;
  activity.isOpen = req.body.isOpen;
  activity.state = req.body.state;

  activity.save(function(err) {
<<<<<<< HEAD
>>>>>>> Renamed all events to activities, added new activites schema
=======
    if (err){
      return res.status(500).json(err);
    }
>>>>>>> Fixed creation of new activity
=======
>>>>>>> Fixed error message for deleting
=======
>>>>>>> 9c727a9d9112ff102fb945452e4cbb49ca1d2cff
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> Renamed all events to activities, added new activites schema
=======
>>>>>>> Fixed creation of new activity
=======
>>>>>>> Fixed error message for deleting
=======
>>>>>>> 9c727a9d9112ff102fb945452e4cbb49ca1d2cff
      res.json({
        message: 'Activity updated!',
        activity: updatedActivity
      });
    });
  });
});

module.exports = activityRouter;
