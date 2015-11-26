Template.application.helpers({

  myHelper: function () {
    //
  },

});

Template.application.onCreated(function () {
  var _this = this;

});

Template.application.onRendered(function () {
  var _this = this;

  $('input[type="date"]').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

});

Template.application.events({

});
