Accounts.emailTemplates.siteName = "XVII Bienal de Fotografía";
Accounts.emailTemplates.from = Meteor.settings.email_from;

// Reset password
Accounts.emailTemplates.resetPassword.subject = function(user) {
 return "Tu nueva contraseña | XVII Bienal de Fotografía.";
};

Accounts.emailTemplates.resetPassword.text = function (user, url) {
  return "Para restablecer tu contraseña ve al siguiente enlace: \n\n" + url;
};

// Enroll account
Accounts.emailTemplates.enrollAccount.subject = function(user) {
  return "Tu cuenta de jurado | XVII Bienal de Fotografía.";
};
Accounts.emailTemplates.enrollAccount.text = function(user, url) {
  return "Hola. Puedes acceder a tu cuenta de jurado de la XVII Bienal de Fotografía en el siguiente link:\n\n"
  + url;
};
