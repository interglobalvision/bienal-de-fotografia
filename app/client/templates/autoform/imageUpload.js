var $hiddenInput,
$fileInput,
$thumbnail;

Template.imageUpload.rendered = function () {
};

Template.imageUpload.events({
  'change .image-upload-input': function(e) {
    e.preventDefault();

    var uploader = new Slingshot.Upload("imageUpload");

    $hiddenInput = $('#' + this.atts.id);
    $loader = $hiddenInput.siblings('.preloader-wrapper');
    $thumbnail = $hiddenInput.siblings('.image-upload-thumbnail');

    $loader.addClass('active');

    uploader.send($hiddenInput.siblings('.image-upload-input')[0].files[0], function (error, downloadUrl) {
      if (error) {
        console.log('Error uploading', error.reason);
        Materialize.toast(TAPi18n.__('alert-error'), 2000);
        Materialize.toast(error.reason, 3000);
      } else {
        $hiddenInput.val(downloadUrl);
        $thumbnail.attr('src', downloadUrl).show();
        Materialize.toast(TAPi18n.__('alert-upload_success'), 3000);
      }

      $loader.removeClass('active');
    });
  },

  'click .image-upload-trigger': function(e) {
    e.preventDefault();

    // Trigger click action on input field true .image-upload-input
    $hiddenInput = $('#' + this.atts.id);
    $fileInput = $hiddenInput.siblings('.image-upload-input');

    $fileInput.click();
  },
});
