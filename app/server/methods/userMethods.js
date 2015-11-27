Meteor.methods({

  setupApplicant: function(userId) {
    check(userId, String);
    
    // Setup Applicant Role
    Roles.addUsersToRoles(userId, ['applicant',]);

    // Create empty application for the user
    Applications.insert({userId: userId, status: 'saved',});
  },
});
