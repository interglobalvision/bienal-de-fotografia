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
