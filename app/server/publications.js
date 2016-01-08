/* ---------------------------------------------------- +/

## Publications ##

All publications-related code.

/+ ---------------------------------------------------- */

// ---- Applications

// Publish a single application
Meteor.publish('singleApplication', function(userId) {
  return Applications.find({userId: userId,});
});

// Publish all applications
Meteor.publish('allApplications', function(userId) {
  return Applications.find();
});