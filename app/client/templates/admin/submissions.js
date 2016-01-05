Template.submissions.helpers({

  myHelper: function () {
    //
  },

});

Template.submissions.onRendered(function() {
  
  var _this = this;

  _this.$('.js-sortable').tablesorter();

});