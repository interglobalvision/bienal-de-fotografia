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
    return Applications.find({status: { $in: [ 'submitted', 'saved', ], }, }).count();
  },

});

Template.submissions.onRendered(function() {
  
  var _this = this;

  _this.$('.js-sortable').tablesorter();

});

Template.submissions.events({
  'click .cancel-application': function(event){
    var _this = this;

    event.preventDefault();

    if(confirm(TAPi18n.__('admin.confirmCancelApplication'))) {

      var applicationId = _this._id;

      if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
        Meteor.call('cancelApplication', applicationId, function(error, result) {
          if (error) {
            alert(error);
          } else {
            Materialize.toast(TAPi18n.__('admin.applicationCanceled'), 3000);
          }
        });
      } else {
        Materialize.toast("You don't have permission", 3000);
        Router.go('/');
      }

    }
  },

  'click .restore-application': function(event){
    var _this = this;

    event.preventDefault();

    if(confirm(TAPi18n.__('admin.confirmRestoreApplication'))) {

      var applicationId = _this._id;

      if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
        Meteor.call('restoreApplication', applicationId, function(error, result) {
          if (error) {
            alert(error);
          } else {
            Materialize.toast(TAPi18n.__('admin.applicationRestored'), 3000);
          }
        });
      } else {
        Materialize.toast("You don't have permission", 3000);
        Router.go('/');
      }

    }
  },
});


