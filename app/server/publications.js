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
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '331');
  }

  return Applications.find();
});

// Publish users
Meteor.publish('allUsers', function (){
  if (!Roles.userIsInRole(this.userId, ['admin',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '332');
  }

  return Meteor.users.find();
});

// Publish committee users
Meteor.publish('committeeUsers', function (){
  if (!Roles.userIsInRole(this.userId, ['admin',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '333');
  }

  return Roles.getUsersInRole('committee');
});

// Ratings
Meteor.publish('ratings', function(userId) {
  check(userId, String);

  if (!Roles.userIsInRole(this.userId, ['admin', 'committee',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '334');
  }

  return Ratings.find({userId: userId,});
});

Meteor.publish('allRatings', function() {
  if (!Roles.userIsInRole(this.userId, ['admin', 'committee',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '335');
  }

  return Ratings.find();
});

// Notes
Meteor.publish('notes', function(userId, applicationId) {
  check(userId, String);
  check(userId, String);

  if (!Roles.userIsInRole(this.userId, ['admin', 'committee',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '334');
  }

  return Notes.find({userId: userId, applicationId: applicationId,});
});

Meteor.publish('allNotes', function() {
  if (!Roles.userIsInRole(this.userId, ['admin',])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '335');
  }

  return Notes.find();
});

// Applicant Email
Meteor.publish('applicantEmail', function(userId) {
  if (!Roles.userIsInRole(this.userId, ['admin'])) {
    throw new Meteor.Error('not-allowed', 'You must be more powerful aka No Juice Error', '335');
  }

  return Meteor.users.find({ '_id': userId }, { fields: { emails: 1 } });
});
