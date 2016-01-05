/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */

Handlebars.registerHelper('myHelper', function(myArgument){
  return "Hello, " + myArgument;
});

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