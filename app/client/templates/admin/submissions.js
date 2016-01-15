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

});

Template.submissions.onRendered(function() {
  
  var _this = this;

  _this.$('.js-sortable').tablesorter();

});