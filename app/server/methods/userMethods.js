Meteor.methods({

  setupApplicant: function(userId) {
    check(userId, String);
    
    // Setup Applicant Role
    Roles.addUsersToRoles(userId, ['applicant',]);

    // Create empty application for the user
    Meteor.call('createApplication', {userId: userId, status: 'saved',}, function(error, result) {
      if (error) {
        throw new Meteor.Error('application-creation-failed', error);
      } else {
        return true;
      }
    });
  },
});
