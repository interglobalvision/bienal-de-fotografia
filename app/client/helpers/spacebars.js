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

// Add 0s
Handlebars.registerHelper('formatWithZeros', function(number) {
  number = number.toString();
  while(number.length < 4 ) {
    number = "0" + number;
  }

  return number;
});

// Is Submitted
Handlebars.registerHelper('isSubmitted', function(application) {
  if (application.status === 'submitted') {
    return true;
  } else {
    return false;
  }
});

// Translate status
Handlebars.registerHelper('translateStatus', function(status) {
  if (status === 'saved') {
    return TAPi18n.__('application.saved');
  } else if (status === 'submitted') {
    return TAPi18n.__('application.submitted');
  }
});