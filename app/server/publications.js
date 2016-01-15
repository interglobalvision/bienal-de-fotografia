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
  if (!Roles.userIsInRole(this.userId, ['admin', 'committee',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error');
  }

  return Applications.find();
});

// Publish users
Meteor.publish('allUsers', function (){
  if (!Roles.userIsInRole(this.userId, ['admin',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error');
  }

  return Meteor.users.find();
});

// Publish committee users
Meteor.publish('committeeUsers', function (){
  if (!Roles.userIsInRole(this.userId, ['admin',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error');
  }

  return Roles.getUsersInRole('committee');
});

// Ratings
Meteor.publish('ratings', function(userId) {
  check(userId, String);

  if (!Roles.userIsInRole(this.userId, ['admin', 'committee',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error');
  }

  return Ratings.find({userId: userId,});
});

Meteor.publish('allRatings', function() {
  if (!Roles.userIsInRole(this.userId, ['admin', 'committee',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error');
  }

  return Ratings.find();
});