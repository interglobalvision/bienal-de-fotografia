Template.homepage.helpers({
  isLoggedIn: function () {
    return !!Meteor.user();
  },
});
