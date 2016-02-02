Template.submissionRow.helpers({

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
