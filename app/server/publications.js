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

// Publish users
Meteor.publish('allUsers', function (){
  return Meteor.users.find();
});

// Ratings
Meteor.publish('ratings', function(userId) {
  check(userId, String);

  return Ratings.find({userId: userId,});
});