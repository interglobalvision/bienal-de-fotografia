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
  nationality: {
    type: String,
    label: 'Nacionalidad',
  },
  age: {
    type: Number,
    label: 'Edad',
    min: 0,
  },
  streetAndNumber: {
    type: String,
    label: 'Calle y Numero',
    optional: false,
  },
  neighborhood: {
    type: String,
    label: 'Colonia',
    optional: false,
  },
  municipality: {
    type: String,
    label: 'Municipio',
    optional: false,
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
    autoform: {
      'placeholder': '(123) 456 7890', 
    },
  },
  scholarity: {
    type: String,
    label: 'Nivel de Escolaridad',
    autoform: {
      type: 'select',
      options: function() {
        return [
        {value: 'media-superior', label: 'Media Superior',},
        {value: 'tecnica', label: 'Técnica',},
        {value: 'superior', label: 'Superior',},
        {value: 'posgrado', label: 'Posgrado',},
        ];
      },
    },
    allowedValues: [
      'media-superior',
      'tecnica',
      'superior',
      'posgrado',
    ],
  },

  // Works
  works: {
    type: [Object,],
    min: 1,
    label: 'Obras',
  },
  'works.$.image': {
    type: String,
    optional: true, // To test before implementing upload
    autoform: {
      type: 'imageUpload',
    },
  },
  'works.$.title': {
    type: String,
    label: 'Título',
    optional: true,
  },
  'works.$.date': {
    type: Date,
    label: 'Fecha',
    optional: true,
  },
  'works.$.place': {
    type: String,
    label: 'Lugar',
    optional: true,
  },
  'works.$.width': {
    type: Number,
    label: 'Ancho (cm)',
  },
  'works.$.height': {
    type: Number,
    label: 'Alto (cm)',
  },
  'works.$.medium': {
    type: String,
    label: 'Técnica',
  },

  // Series
  seriesTitle: {
    type: String,
    label: 'Título de la Serie',
  },

  // TODO this field is causing validation problems
  seriesDate: {
    type: Date,
    label: 'Fecha de la Serie',
    optional: true, // To test before implementing upload
  },
  seriesType: {
    type: String,
    label: 'Tipo',
    allowedValues: [
      'foto',
      'audiovisual',
      '3d',
    ],
    autoform: {
      type: 'select',
      options: function() {
        return {
          'foto': 'Foto',
          'audiovisual' : 'Proyecto audiovisual/multimedia',
          '3d': 'Instalación [3D]',
        };
      },
    },
  },
  seriesDescription: {
    type: String,
    label: 'Descripción del proyecto',
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },
  seriesLayout: {
    type: String,
    label: 'Croquis explicativo de montaje',
    optional: true, // To test before implementing upload
    autoform: {
      type: 'imageUpload',
    },
  },
  seriesRequirements: {
    type: String,
    label: 'Requerimientos especiales del montaje',
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
    optional: true, // To test before implementing upload
    autoform: {
      type: 'imageUpload',
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
