Meteor.methods({

  setupUser: function(userId) {
    check(userId, String);

    Meteor.call('createUserRoles', userId, function(error, result) {
      if (error) {
        throw new Meteor.Error('set-role-failed', error);
      } else if (result === 'applicant') {

        // TODO: Create Application
      } else {
        return true;
      }
    });
  },

  createUserRoles: function(userId, role) {
    check(userId, String);

    var result;

    if (Meteor.users.find().count() === 1) {
      Roles.addUsersToRoles(userId, ['admin',]);
      Meteor.users.update(userId, {$set:{'profile.name':'Admin',},});
      result = 'admin';
    } else if (role === 'committee' || role === 'admin' && Roles.userIsInRole(Meteor.userId(), ['admin',])) {
      Roles.addUsersToRoles(userId, [role,]);
      result = role;
    } else {
      Roles.addUsersToRoles(userId, ['applicant',]);
      result = 'applicant';
    }

    return result;
  },

});
