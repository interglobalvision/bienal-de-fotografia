Meteor.methods({
  updateApplicationNote: function(noteText, applicationId) {
    check(noteText, String);
    check(applicationId, String);

    if (!this.userId) {
      throw new Meteor.Error('error-not-signed-in', 'You must sign in first.', '654');
    }

    if (!Roles.userIsInRole(this.userId, ['committee',])) {
      throw new Meteor.Error('not-allowed', 'You must be a committee user aka No Juice Error');
    }

    // Update note
    Notes.update({userId: Meteor.userId(), applicationId: applicationId,}, {$set: {note:noteText,},}, {upsert: true});

  },

});