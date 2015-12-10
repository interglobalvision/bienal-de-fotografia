Meteor.methods({

  sendMail: function(email) {
    this.unblock();

    Email.send({
      to: email.address,
      from: Meteor.settings.email_from,
      subject: email.subject,
      text: email.text,
    });

  },

  applicantEnrollmentEmail: function(userId) {
    this.unblock();

    check(userId, String);

    var user = Meteor.users.findOne(userId);
    var email = {
      address: user.emails[0].address,
      subject: 'Cuenta creada exitosamente | XVII Bienal de Fotografía',
      text: 'Gracias por comenzar el proceso de solicitud de la XVII Bienal de Fotografía .\n\nPuedes acceder a tu solicitud en: http://bienaldefotografia.mx/registro\nInicia sesión con el email: ' + user.emails[0].address + ' y la contraseña que elegiste.\n\nSi olvidaste tu contraseña puedes restablecerla en: http://bienaldefotografia.mx/restablecer-contrasena',
    };

    Meteor.call('sendMail', email);
  },

  applicationSubmittedEmail: function(userId, folio) {
    this.unblock();

    check(userId, String);

    // Prepend 0s
    while(folio.length < 4 ) {
      folio = "0" + folio;
    }

    var user = Meteor.users.findOne(userId);
    var email = {
      address: user.emails[0].address,
      subject: 'Aplicación enviada exitosamente | XVII Bienal de Fotografía',
      text: 'Gracias por inscribirte al proceso de selección de la XVII Bienal de Fotografía.\n\nTu solicitud ha sido procesada exitosamente y se le asignó el folio número: ' + folio + '\n\nCada solicitud será cuidadosamente revisada, considerada y analizada por el jurado de la Bienal. La publicación de resultados de seleccionados se hará a través de la página del Centro de la Imagen el lunes 4 de abril de 2016 a las 14:00 horas.\n\nPara mayor información por favor de enviar un correo a 17bienalfotografia@gmail.com',
    };

    Meteor.call('sendMail', email);
  },

});
