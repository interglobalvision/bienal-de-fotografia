Router.map(function() {

  // Admin

  this.route('admin', {
    path: '/admin',
    onBeforeAction: function() {
      var userId = Meteor.userId();

      if (Roles.userIsInRole(userId, 'admin')) {
        this.next();
      } else if (Roles.userIsInRole(userId, 'committee')) { 
        Router.go('/admin/solicitudes');
      } else {
        Router.go('/');
      }
    },

    waitOn: function() {
      return [
        Meteor.subscribe('allUsers'),
      ];
    },

    data: function() {
      return {
        adminUsers: Roles.getUsersInRole('admin'),
        committeeUsers: Roles.getUsersInRole('committee'),
      };
    },

  });

  this.route('submissions', {
    path: '/admin/solicitudes',
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

    path: '/admin/solicitudes/:userId',

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