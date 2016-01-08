Router.map(function() {

  // Admin

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

  });

  this.route('submissions', {
    path: '/solicitudes',
    onBeforeAction: function() {
      var userId = Meteor.userId();

      if (Roles.userIsInRole(userId, 'admin') || Roles.userIsInRole(userId, 'committee')) {
        this.next();
      } else {
        Router.go('/');
      }
    },

    waitOn: function() {
      return [
        Meteor.subscribe('allApplications'),
      ];
    },

    data: function() {
      return {
        applications: Applications.find(),
      };
    },
  });

  this.route('submissionReview', {

    onBeforeAction: function() {
      var userId = Meteor.userId();

      if (Roles.userIsInRole(userId, 'admin') || Roles.userIsInRole(userId, 'committee')) {
        this.next();
      } else {
        Router.go('/');
      }
    },

    path: '/solicitudes/:userId',

    waitOn: function() {
      return [
        Meteor.subscribe('singleApplication', this.params.userId),
      ];
    },

    data: function() {
      return {
        application: Applications.findOne({userId: this.params.userId,}),
      };
    },
  });

});