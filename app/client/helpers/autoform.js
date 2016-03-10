AutoForm.setDefaultTemplateForType('afArrayField', 'igv_materialize');
AutoForm.setDefaultTemplateForType('afSelect', 'igv_materialize');

AutoForm.addInputType('imageUpload', {
  template: 'imageUpload',
  valueOut: function() {
    var imageUrl = this.val();

    return imageUrl;
  },
});

AutoForm.hooks({
  insertApplicationForm: {
    onSuccess: function(insertDoc, updateDoc, currentDoc) {
      Meteor.call('submitApplication', this.docId, function(error, response) {
        if (error) {
          console.log(error);
          Materialize.toast(TAPi18n.__('alert-error'), 3000);
        } else {
          Materialize.toast(TAPi18n.__('alert-application_submitted'), 3000);
        }
      });
    },
  },
});
