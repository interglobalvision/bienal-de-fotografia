Template.admin.created = function () {
  //
};

Template.admin.helpers({
  //
});

Template.admin.rendered = function () {
  //
};

Template.admin.events({
  'click #admin-add-user': function(event){
    event.preventDefault();

    var user = {
      username: $('#username').val(),
      email: $('#email').val(),
    },
    role = $('input[name="role"]:checked').val();

    if (!user.email || !role || !user.username) {
      Materialize.toast(TAPi18n.__('alert-please_fill'), 3000);
    } else if (role === 'admin') {
      Meteor.call('createAdminUser', user, function(error, result) {
        if (error) {
          Materialize.toast(TAPi18n.__('alert-error'), 2000);
          Materialize.toast(error.reason, 3000);
        } else {
          $('#email').val('');
          $('#username').val('');
          $('input[name="role"]:checked').prop('checked', false);
        }
      });
    } else if (role === 'committee') {
      Meteor.call('createCommitteeUser', user, function(error, result) {
        if (error) {
          Materialize.toast(TAPi18n.__('alert-error'), 2000);
          Materialize.toast(error.reason, 3000);
        } else {
          $('#email').val('');
          $('#username').val('');
          $('input[name="role"]:checked').prop('checked', false);
        }
      });
    }
  },

  'click .remove-user': function(event){
    event.preventDefault();

    var removeUserId = this._id,
    userId = Meteor.userId();

    if (Roles.userIsInRole(userId, 'admin')) {
      Meteor.call('removeUser', removeUserId, function(error, result) {
        if (error) {
          alert(error);
        } else {
          Materialize.toast('User removed', 3000);
        }
      });
    } else {
      Materialize.toast("You don't have permission", 3000);
      Router.go('/');
    }
  },
});
