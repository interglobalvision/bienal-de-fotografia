/* ---------------------------------------------------- +/
## Items ##
All code related to the Items collection goes here.
/+ ---------------------------------------------------- */

Items = new Meteor.Collection('items');

// Allow/Deny

Items.allow({
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
  createItem: function(item) {
    if (true) {
      Items.insert(item);
    }
  },

  removeItem: function(item) {
    if (true) {
      Items.remove(item._id);
    } else {
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.');
    }
  },
});