Template.submissionReview.onRendered(function() {
  var _this = this;

  //highlight users rating value if set
  _this.autorun(function () {
    var userReview = Ratings.findOne({applicationId: _this.data.application._id,});

    if (userReview) {
      $('.js-set-rating').removeClass('navy').addClass('grey');
      $('li[data-value="' + userReview.rating + '"]').removeClass('grey').addClass('navy');
    }

  });

});

Template.submissionReview.events({
  'click .js-set-rating': function(e) {
    e.preventDefault();

    var _this = this,
      rating = parseInt($(e.currentTarget).data('value')),
      applicationId = _this._id;

    Meteor.call('rateApplication', rating, applicationId, function(err, result) {
      if (err) {
        console.log(err);
      } else {

      }
    });
  },
});