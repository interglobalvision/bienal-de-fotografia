Template.login.events = {
  'click input[type=submit]': function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        Materialize.toast("Error", 2000);
        Materialize.toast(error.reason, 3000);
        console.log(error);
      } else {
        Router.go('/');
      }
    });
  },
};
