Router.map(function() {

  // Items

  this.route('items', {
    waitOn: function () {
      return Meteor.subscribe('allItems');
    },

    data: function () {
      return {
        items: Items.find(),
      };
    },
  });

  this.route('item', {
    path: '/items/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },

    data: function () {
      return {
        item: Items.findOne(this.params._id),
      };
    },
  });

});