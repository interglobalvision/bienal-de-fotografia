/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      Router.go('login');
    }

    this.next();
  },

};

Router.onBeforeAction(filters.isLoggedIn, {only: ['application',],});

// Routes

Router.map(function() {

  // Pages

  this.route('homepage', {
    path: '/',
  });

  this.route('content');

  this.route('application', {
    path: '/registro',
    onBeforeAction: function() {
      var userId = Meteor.userId();

      if (Roles.userIsInRole(userId, 'applicant')) {

        var userApplication = Applications.findOne();

        // If application have been submitted redirect to: /gracias
        if ( userApplication.status == 'submitted' ) {
          Router.go('/gracias');
        }

        // Check if after deadline
        if (moment().utc().isAfter(Meteor.settings.public.applicationDeadline)) {
          Router.go('/application-closed');
        }

        this.next();

      } else if (Roles.userIsInRole(userId, 'committee')) {
        Router.go('/solicitudes');
      } else if (Roles.userIsInRole(userId, 'admin')) {
        Router.go('/admin');
      }
    },

    waitOn: function() {
      return [
        Meteor.subscribe('singleApplication', Meteor.userId()),
      ];
    },

    data: function() {
      return Applications.findOne();
    },
  });

  this.route('gracias', {
    path: '/gracias',
    waitOn: function() {
      return [
        Meteor.subscribe('singleApplication', Meteor.userId()),
      ];
    },

    data: function() {
      return Applications.findOne();
    },
  });

  // Users

  this.route('login', {
    path: '/ingresar',
  });

  this.route('signup', {
    path: '/registrarse',
  });

  this.route('forgot', {
    path: '/restablecer-contrasena',
  });

});