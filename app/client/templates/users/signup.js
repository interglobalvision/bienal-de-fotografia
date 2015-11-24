Template.signup.events = {
  'click input[type=submit]': function(event) {
    event.preventDefault();

    var user = {
      username: $('#username').val(),
      email: $('#email').val(),
      password: $('#password').val(),
    };

    if (!user.username || !user.email || !user.password) {

      Materialize.toast('Por favor llena todos los campos', 3000);

    } else {
      Accounts.createUser(user, function(error) {
        if (error) {
          Materialize.toast("Error", 2000);
          Materialize.toast(error.reason, 3000);
        } else {
          var userId = Meteor.userId();

          Meteor.call('setupUser', userId, function(error) {
            if (error) {
              Materialize.toast(TAPi18n.__('alert-error'), 2000);
              console.log(error);
            } else if (Roles.userIsInRole(userId, 'admin')) {
              Router.go('/admin');
            } else if (Roles.userIsInRole(userId, 'applicant')) {
              Router.go('/registro');
            } else {
              Router.go('/');
            }
          });
          Router.go('/');

        }
      });
    }
  },
};
