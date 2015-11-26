AutoForm.setDefaultTemplate('materialize');

AutoForm.addInputType('imageUpload', {
  template: 'imageUpload',
  valueOut: function() {
    var imageUrl = this.val();

    return imageUrl;
  },
});
