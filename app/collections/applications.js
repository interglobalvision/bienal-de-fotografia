/* ---------------------------------------------------- +/
## Applications ##
All code related to the Applications collection goes here.
/+ ---------------------------------------------------- */

Applications = new Meteor.Collection('applications');

// Allow/Deny

Applications.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function(userId, doc) {
    return true;
  },
});

// Methods

Meteor.methods({
  createApplication: function(application) {
    if (true) {
      Applications.insert(application);
    }
  },

  removeApplication: function(application) {
    if (true) {
      Applications.remove(application._id);
    } else {
      throw new Meteor.Error(403, 'You do not have the rights to delete this application.');
    }
  },
});
