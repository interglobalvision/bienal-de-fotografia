Template.signup.events = {
  'click input[type=submit]': function(event) {
    event.preventDefault();

    var user = {
      email: $('#email').val(),
      password: $('#password').val(),
    };

    if (!user.email || !user.password) {

      Materialize.toast('Por favor llena todos los campos', 3000);

    } else {
      Accounts.createUser(user, function(error) {
        if (error) {
          Materialize.toast("Error", 2000);
          Materialize.toast(error.reason, 3000);
          console.log(error);
        } else {
          var userId = Meteor.userId();

          Meteor.call('setupUser', userId, function(error) {
            if (error) {
              Materialize.toast("Error", 2000);
              Materialize.toast(error.reason, 3000);
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
