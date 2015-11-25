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
      alert('Please Log In First.');
      this.stop();
    }
  },

};

Router.onBeforeAction(filters.isLoggedIn, {only: ['items',],});

// Routes

Router.map(function() {

  // Pages

  this.route('homepage', {
    path: '/',
  });

  this.route('content');

  this.route('application', {
    path: '/registro',
  });

  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

  // Boiler admin

  this.route('admin', {
    path: '/admin',
    onBeforeAction: function() {
      var userId = Meteor.userId();

      if (Roles.userIsInRole(userId, 'admin')) {
        this.next();
      } else {
        Router.go('/');
      }
    },

    waitOn: function() {
      return [
        Meteor.subscribe('items'),
      ];
    },

    data: function() {
      return {
        items: Items.find(),
      };
    },
  });

});

