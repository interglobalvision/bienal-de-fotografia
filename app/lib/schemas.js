SimpleSchema.debug = true;

ApplicationSchema = new SimpleSchema({

  // Personal data
  name: {
    type: String,
  },
  pseudonym: {
    type: String,
    optional: true,
  },
  // As a string cuz using a Date field implies more work and it's only reference information
  birthday: {
    type: String,
    min: 0,
  },
  birthplace: {
    type: String,
  },
  nationality: {
    type: String,
  },
  streetAndNumber: {
    type: String,
  },
  neighborhood: {
    type: String,
  },
  municipality: {
    type: String,
  },
  state: {
    type: String,
    autoform: {
      type: 'select',
      options: function() {
        return Estados; 
      },
    },
  },
  zip: {
    type: String,
  },
  telephone: {
    type: String,
    min: 10,
    autoform: {
      placeholder: '(123) 456 7890', 
    },
  },
  cellphone: {
    type: String,
    optional: true,
    min: 10,
    autoform: {
      placeholder: '(123) 456 7890', 
    },
  },
  otherPhone: {
    type: String,
    optional: true,
    min: 10,
    autoform: {
      placeholder: '(123) 456 7890', 
    },
  },

  // Works
  works: {
    type: [Object,],
    min: 1,
  },
  'works.$.title': {
    type: String,
    optional: true,
  },
  'works.$.date': {
    type: String,
  },
  'works.$.place': {
    type: String,
    optional: true,
  },
  'works.$.width': {
    type: String,
  },
  'works.$.height': {
    type: String,
  },
  'works.$.depth': {
    type: String,
    optional: true,
  },
  'works.$.medium': {
    type: String,
  },
  'works.$.image': {
    type: String,
    autoform: {
      type: 'imageUpload',
    },
  },
  'works.$.video': {
    type: String,
    optional: true,
  },

  // Project
  projectTitle: {
    type: String,
  },
  projectDate: {
    type: String,
  },
  projectType: {
    type: String,
    allowedValues: [
      'foto',
      'audiovisual',
      '3d',
      'otro',
    ],
    autoform: {
      type: 'select',
    },
  },
  projectDescription: {
    type: String,
    max: 2000,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },
  projectLayout: {
    type: String,
    autoform: {
      type: 'imageUpload',
    },
  },
  projectRequirements: {
    type: String,
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },
  projectComments: {
    type: String,
    optional: true,
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },

  cv: {
    type: String,
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },

  identificationDocument: {
    type: String,
    autoform: {
      type: 'imageUpload',
    },
  },

  acceptTerms: {
    type: Boolean,
    allowedValues: [true],
    autoform: {
      type: 'boolean-checkbox',
    },
  },

  // Hidden
  folioNumber: {
    type: Number,
    min: 0,
  },

  rating: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },

});

ApplicationSchema.messages({
  "notAllowed acceptTerms": "Debes aceptar los Terminos y Condiciones",
});

Meteor.startup(function () {
  ApplicationSchema.i18n('application');
});
