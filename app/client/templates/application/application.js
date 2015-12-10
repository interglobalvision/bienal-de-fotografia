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
    selectYears: 15, // Creates a dropdown of 15 years to control year
  });

});

Template.application.events({
  // Save application
  'click .saveApplication': function(e) {
    e.preventDefault();

    document.querySelector('.progress').style.opacity = 1;

    var applicationValues = AutoForm.getFormValues('insertApplicationForm');

    // Update values
    Meteor.call('saveApplication', this._id, applicationValues.updateDoc, function(error, response) {
      if (error) {
        console.log(error);
        Materialize.toast(TAPi18n.__('alert-error'), 3000);
        Materialize.toast(error.reason, 3000);
      } else {
        Materialize.toast(TAPi18n.__('alert-application_saved'), 3000);
      }

      document.querySelector('.progress').style.opacity = 0;
    });

  },

  // Open modal with terms and conditions on click in the field label
  'click #terms-field label': function(e) {
     $('#terms-modal').openModal();
  },

  // Sets terms to true if click con accept
  'click #agree-btn': function(e) {
    $('input[name="acceptTerms"]').prop('checked', true);
  },

  // Clear terms field is click on disagree
  'click #disagree-btn': function(e) {
    $('input[name="acceptTerms"]').prop('checked', false);
  },
  
});
