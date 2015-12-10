SimpleSchema.debug = true;

ApplicationSchema = new SimpleSchema({

  // Personal data
  name: {
    type: String,
    label: 'Nombre completo',
  },
  pseudonym: {
    type: String,
    label: 'Nombre artistico',
    optional: true,
  },
  // As a string cuz using a Date field implies more work and it's only reference information
  birthday: {
    type: String,
    label: 'Fecha de nacimiento (DD/MM/AAAA)',
    min: 0,
  },
  birthplace: {
    type: String,
    label: 'Lugar de nacimiento (población,estado o equivalente y país)',
  },
  nationality: {
    type: String,
    label: 'Nacionalidad',
  },
  streetAndNumber: {
    type: String,
    label: 'Calle y Numero',
  },
  neighborhood: {
    type: String,
    label: 'Colonia',
  },
  municipality: {
    type: String,
    label: 'Municipio',
  },
  state: {
    type: String,
    label: 'Estado',
    autoform: {
      type: 'select',
      options: function() {
        return Estados; 
      },
    },
  },
  zip: {
    type: String,
    label: 'C.P.',
  },
  telephone: {
    type: String,
    label: 'Telefono / Fax',
    min: 10,
    autoform: {
      placeholder: '(123) 456 7890', 
    },
  },
  cellphone: {
    type: String,
    label: 'Celular',
    optional: true,
    min: 10,
    autoform: {
      placeholder: '(123) 456 7890', 
    },
  },
  otherPhone: {
    type: String,
    label: 'Otro telefono',
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
    label: 'Obra',
  },
  'works.$.title': {
    type: String,
    label: 'Título',
    optional: true,
  },
  'works.$.date': {
    type: String,
    label: 'Fecha (año)',
  },
  'works.$.place': {
    type: String,
    label: 'Lugar',
    optional: true,
  },
  'works.$.width': {
    type: String,
    label: 'Ancho',
  },
  'works.$.height': {
    type: String,
    label: 'Alto',
  },
  'works.$.depth': {
    type: String,
    label: 'Profundidad',
    optional: true,
  },
  'works.$.medium': {
    type: String,
    label: 'Técnica',
  },
  'works.$.image': {
    type: String,
    label: 'Imagen',
    autoform: {
      type: 'imageUpload',
    },
  },
  'works.$.video': {
    type: String,
    label: 'Video (youtube o vimeo)',
    optional: true,
  },

  // Project
  projectTitle: {
    type: String,
    label: 'Título del proyecto',
  },
  projectDate: {
    type: String,
    label: 'Fecha del proyecto (año)',
  },
  projectType: {
    type: String,
    label: 'Tipo de proyecto',
    allowedValues: [
      'foto',
      'audiovisual',
      '3d',
      'otro',
    ],
    autoform: {
      type: 'select',
      options: function() {
        return {
          'foto': 'Foto',
          'audiovisual' : 'Proyecto audiovisual/multimedia/gif',
          '3d': 'Instalación (3D)',
          'otro': 'Otro',
        };
      },
    },
  },
  projectDescription: {
    type: String,
    label: 'Descripción del proyecto',
    max: 2000,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },
  projectLayout: {
    type: String,
    label: 'Croquis explicativo de montaje',
    autoform: {
      type: 'imageUpload',
    },
  },
  projectRequirements: {
    type: String,
    label: 'Requerimientos especiales del montaje',
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },
  projectComments: {
    type: String,
    label: 'Comentarios sobre el proyecto',
    optional: true,
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },

  cv: {
    type: String,
    label: 'Semblanza curricular',
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },

  identificationDocument: {
    type: String,
    label: 'Documento de identificación (IFE o documento probatorio)',
    autoform: {
      type: 'imageUpload',
    },
  },

  acceptTerms: {
    type: Boolean,
    label: "Acepto los terminos y condiciones",
    allowedValues: [true],
    autoform: {
      type: 'boolean-checkbox',
    },
  },

  // Hidden
  folioNumber: {
    type: Number,
    label: 'Numero de Folio',
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
