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

  // not sure we use or need this after all?
  createUserRoles: function(userId, role) {
    check(userId, String);
    check(role, String);

    if ((role !== 'committee' && role !== 'admin')) {
      throw new Meteor.Error('bad-request', 'No valid role.', '523');
    }

    if (!Roles.userIsInRole(this.userId, ['admin',])) {
      throw new Meteor.Error('not-allowed', 'You must be admin aka No Juice Error', '541');
    }

    return Roles.addUsersToRoles(userId, [role,]);
  },

  adminCreateUser: function(user, role) {
    // sets a schema and checks against it. Throws Meteor error on match fail. Email RegEx is pretty forgiving though
    var userCheck = new SimpleSchema({
      username: {type: String,},
      email: {type: String, regEx: SimpleSchema.RegEx.Email,},
    });

    check(user, userCheck);

    if (!Roles.userIsInRole(this.userId, ['admin',])) {
      throw new Meteor.Error('not-allowed', 'You must be admin aka No Juice Error', '542');
    }

    var userId = Accounts.createUser(user);

    Roles.addUsersToRoles(userId, [role,]);

    return Meteor.call('adminEnrollmentEmail', userId);
  },

  removeUser: function(userId) {
    check(userId, String);

    if (!Roles.userIsInRole(this.userId, ['admin',])) {
      throw new Meteor.Error('not-allowed', 'You must be admin aka No Juice Error', '543');
    }

    if (userId === this.userId) {
      throw new Meteor.Error('not-allowed', 'You can\'t remove yourself dummy!', '599');
    }

    return Meteor.users.remove({_id: userId,});
  },
});
