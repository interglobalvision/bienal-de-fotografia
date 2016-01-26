Template.submissions.events({
  'click .cancel-application': function(event){
    event.preventDefault();

    if(confirm(TAPi18n.__('admin.confirmCancelApplication'))) {

      var applicationId = this._id;

      if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
        Meteor.call('cancelApplication', applicationId, function(error, result) {
          if (error) {
            alert(error);
          } else {
            Materialize.toast(TAPi18n.__('admin.applicationCanceled', 3000));
          }
        });
      } else {
        Materialize.toast("You don't have permission", 3000);
        Router.go('/');
      }

    }
  },
});

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

  applicationNotCanceled: function() {
    var _this = this;

    if(_this.status !== 'canceled') {
      return true;
    }
    return false;
  },

});

Template.submissions.onRendered(function() {
  
  var _this = this;

  _this.$('.js-sortable').tablesorter();

});
