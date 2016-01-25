Template.submissionReview.helpers({

  formatWithLinebreak: function (text) {
    if (text) {
      return new Handlebars.SafeString(text.replace(/\n/g, '<br>'));
    } else {
      return false;
    }
  },

  ratingByUser: function(userId) {
    var application = Applications.findOne();
    var rating = Ratings.findOne({
      userId: userId,
      applicationId: application._id
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

Template.submissionReview.onCreated(function() {
  var _this = this;

  _this.autorun(function () {
    Meteor.subscribe('ratings', Meteor.userId());
    Meteor.subscribe('committeeUsers');
  });

  if( Roles.userIsInRole( Meteor.userId(), ['admin'] ) ) {
    _this.autorun(function () {
      Meteor.subscribe('allRatings');
    });
  }

});

Template.submissionReview.onRendered(function() {
  var _this = this;

  //highlight users rating value if set
  _this.autorun(function () {

    var userReview = Ratings.findOne({applicationId: _this.data.application._id,});

    if (userReview) {
      $('.js-set-rating').removeClass('navy').addClass('grey');
      $('li[data-value="' + userReview.rating + '"]').removeClass('grey').addClass('navy');
    } else {
      $('.js-set-rating').removeClass('navy').addClass('grey');
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
      }
    });
  },
});
