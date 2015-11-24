// Create admin user on startup

if (Meteor.users.find().count() === 0) {

  Accounts.createUser({
    username: 'admin',
    email: Meteor.settings.admin_email,
    password: Meteor.settings.admin_password,
  });

  var admin = Accounts.findUserByEmail(Meteor.settings.admin_email);

  Roles.addUsersToRoles(admin._id, ['admin',]);

}

// Add items if none

if (Items.find().count() === 0) {

  Items.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River.",
  });

  Items.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty.",
  });

  Items.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac.",
  });

}