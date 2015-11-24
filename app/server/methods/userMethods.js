Meteor.methods({

  setupApplicant: function(userId) {
    check(userId, String);
    
    // Setup Applicant Role
    Roles.addUsersToRoles(userId, ['applicant',]);

    // TODO: Setup applicant's application

  },
});
