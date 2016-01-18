Template.submissions.helpers({

  ratingByApplication: function(applicationId) {
    var _this = this,
    rating = Ratings.findOne({
      userId: Meteor.userId(),
      applicationId: applicationId,
    }, {
      'rating': true,
    });

    if (rating) {
      return rating.rating;
    } else {
      return false;
    }
  },

  applicationsSavedCount: function() {
    return Applications.find({status: 'saved',}).count();
  },
  
  applicationsSubmittedCount: function() {
    return Applications.find({status: 'submitted',}).count();
  },

  applicationsCount: function() {
    return Applications.find().count();
  },

});

Template.submissions.onRendered(function() {
  
  var _this = this;

  _this.$('.js-sortable').tablesorter();

});
