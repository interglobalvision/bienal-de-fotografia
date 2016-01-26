// Methods
Meteor.methods({

  saveApplication: function(applicationId, applicationUpdate) {

    if (!Meteor.userId()) {
      throw new Meteor.Error('not-signed-in', 'You must register a user first before creating an application.', '864');
    }

    var application = Applications.findOne(applicationId);

    // Clean null / falsy values
    if ( applicationUpdate.hasOwnProperty('$set') && applicationUpdate.$set.hasOwnProperty('works') ) {
      applicationUpdate.$set.works = _.compact(applicationUpdate.$set.works);
    }

    return Applications.update(application._id, applicationUpdate);
  },

  submitApplication: function(applicationId) {
    check(applicationId, String);

    // Create update object
    var applicationUpdate = {
      status: 'submitted',
    };

    var application = Applications.findOne(applicationId);

    if (Meteor.userId() !== application.userId) {
      throw new Meteor.Error('not-allowed', 'You must own this application to change it.', '854');
    }

    // Check if this application has a folio already
    if( !application.hasOwnProperty('folio') ) {

      // Get last application with highest folio
      var lastApplicationWithFolio = Applications.findOne({}, {
        sort: {
          'folio': -1,
        },
        fields: {
          'folio': true,
        },
      });

      if( lastApplicationWithFolio.hasOwnProperty('folio') ) {
        applicationUpdate.folio = lastApplicationWithFolio.folio + 1;
      } else {
        applicationUpdate.folio = 1;
      }

    }

    if ( Applications.update(applicationId, {$set: applicationUpdate,}) ) {

      // Send email
      Meteor.call('applicationSubmittedEmail', application.userId, applicationUpdate.folio, function(error, response) {
        if (error) {
          throw new Meteor.Error(500, 'Error 500: Error while sending email', 'Email not sent.' + error, '812');
        }
      });
    }
  },

  cancelApplication: function(applicationId) {
    check(applicationId, String);

    // Should i check role here?
    // i mean, i wonder if we should check role here, or in the front end
    // right now role is being cheked before this method get calles
    // mmm
    // ???

    if (!Meteor.userId()) {
      throw new Meteor.Error('not-signed-in', 'You are not logged in.', '864');
    }

    var application = Applications.findOne(applicationId);

    return Applications.update(application._id, { $set: { status: "canceled" } } );
  },

});
