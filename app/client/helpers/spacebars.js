/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */

//Roles
Handlebars.registerHelper('isAdmin', function() {
  var userId = Meteor.userId();

  if (Roles.userIsInRole(userId, 'admin')) {
    return true;
  }

  return false;
});

Handlebars.registerHelper('isCommittee', function() {
  var userId = Meteor.userId();

  if (Roles.userIsInRole(userId, 'committee')) {
    return true;
  }

  return false;
});

Handlebars.registerHelper('isCommitteeOrAdmin', function() {
  var userId = Meteor.userId();

  if (Roles.userIsInRole(userId, 'committee') || Roles.userIsInRole(userId, 'admin')) {
    return true;
  }

  return false;
});

//Deadline
Handlebars.registerHelper('afterDeadline', function() {
  if (moment().isAfter(Meteor.settings.public.applicationDeadline)) {
    return true;
  }

  return false;
});

// Add 0s
Handlebars.registerHelper('formatWithZeros', function(number) {
  if (number) {
    number = number.toString();
    while(number.length < 4 ) {
      number = "0" + number;
    }

    return number;
  }

  return false;
});

// Application Is
Handlebars.registerHelper('applicationIs', function(status, application) {
  if (application.status === status) {
    return true;
  }

  return false;
});

// Translate status
Handlebars.registerHelper('translateStatus', function(status) {
  if (status) {
    return TAPi18n.__('application.' + status);
  }

  return false;
});
