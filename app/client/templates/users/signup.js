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

          Meteor.call('setupApplicant', userId, function(error) {
            if (error) {
              Materialize.toast("Error", 2000);
              Materialize.toast(error.reason, 3000);
              console.log(error);
            } else {
              Router.go('/registro');
            }
          });

        }
      });
    }
  },
};
