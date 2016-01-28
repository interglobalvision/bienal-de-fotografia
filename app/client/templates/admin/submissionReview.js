Template.submissionReview.helpers({

  ratingByUser: function(userId) {
    var application = Applications.findOne();
    var rating = Ratings.findOne({
      userId: userId,
      applicationId: application._id,
    }, {
      'rating': true,
    });

    if (rating) {
      return rating.rating;
    } else {
      return false;
    }
  },

  note: function() {
    var application = Applications.findOne();
    var note = Notes.findOne({
      userId: Meteor.userId(),
      applicationId: application._id,
    }, {
      'note': true,
    });

    if (note) {
      return note.note;
    } 

    return false;
  },

  noteByUser: function(userId) {
    userId = typeof userId !== 'undefined'? userId : Meteor.userId();
    var application = Applications.findOne();
    var note = Notes.findOne({
      userId: userId,
      applicationId: application._id,
    }, {
      'note': true,
    });

    if (note) {
      return new Handlebars.SafeString(note.note.replace(/\n/g, '<br>'));
    }

    return false;
  },

});

Template.submissionReview.onCreated(function() {
  var _this = this;
  
  _this.autorun(function () {
    Meteor.subscribe('ratings', Meteor.userId());
    Meteor.subscribe('notes', Meteor.userId(), _this.data.application._id);
    Meteor.subscribe('committeeUsers');

    $('textarea').trigger('autoresize');

  });

  if( Roles.userIsInRole( Meteor.userId(), ['admin',] ) ) {
    _this.autorun(function () {
      Meteor.subscribe('allRatings');
      Meteor.subscribe('allNotes');
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

  'click #save-note': function(e) {
    var _this = this,
      note = $('#note-textarea').val(),
      applicationId = _this.application._id;

    Meteor.call('updateApplicationNote', note, applicationId, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        Materialize.toast(TAPi18n.__('alert-application_note_saved'), 3000);
      }
    });
      
  },
});
