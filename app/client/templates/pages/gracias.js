Template.gracias.helpers({

  folio: function () {
    var application = Applications.findOne({}, {
      fields: {
        folio: true,
      },
    });

    // Coverts the folio to string
    // TODO: use formatWithZeros handelbar helper instead
    var folio = application.folio.toString();

    // Prepend 0s
    while(folio.length < 4 ) {
      folio = "0" + folio;
    }

    return folio;
  },

});

Template.gracias.onCreated(function () {
  var _this = this;

});

Template.gracias.onRendered(function () {
  var _this = this;

});

Template.gracias.events({
});
