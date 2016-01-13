/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */

//Roles
Handlebars.registerHelper('isAdmin', function() {
  var userId = Meteor.userId();

  if (Roles.userIsInRole(userId, 'admin')) {
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('isCommittee', function() {
  var userId = Meteor.userId();

  if (Roles.userIsInRole(userId, 'committee')) {
    return true;
  } else {
    return false;
  }
});

Handlebars.registerHelper('isCommitteeOrAdmin', function() {
  var userId = Meteor.userId();

  if (Roles.userIsInRole(userId, 'committee') || Roles.userIsInRole(userId, 'admin')) {
    return true;
  } else {
    return false;
  }
});

//Deadline
Handlebars.registerHelper('afterDeadline', function() {
  if (moment().isAfter(Meteor.settings.public.applicationDeadline)) {
    return true;
  } else {
    return false;
  }
});