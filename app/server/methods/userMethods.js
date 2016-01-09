Meteor.methods({

  setupApplicant: function(userId) {
    check(userId, String);
    
    // Setup Applicant Role
    Roles.addUsersToRoles(userId, ['applicant',]);

    // Create empty application for the user
    Applications.insert({userId: userId, status: 'saved',});

    // Send enrollment email
    Meteor.call('applicantEnrollmentEmail', userId);

  },

  createUserRoles: function(userId, role) {
    check(userId, String);

    var result;

    if ((role === 'committee' || role === 'admin') && Roles.userIsInRole(Meteor.userId(), ['admin',])) {
      Roles.addUsersToRoles(userId, [role,]);
      result = role;
    } 

    return result;
  },

  adminCreateUser: function(user) {
//     check(userId, String);

    var result;

    if (Roles.userIsInRole(Meteor.userId(), ['admin',])) {
      result = Accounts.createUser(user);
    } else {
      result = false;
    }

    return result;
  },

  removeUser: function(userId) {
    check(userId, String);

    var result;

    if (Roles.userIsInRole(Meteor.userId(), ['admin',])) {
      result = Meteor.users.remove({_id: userId,});
    } else {
      result = false;
    }

    return result;
  },
});
