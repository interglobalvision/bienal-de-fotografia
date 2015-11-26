SimpleSchema.debug = true;

ApplicationSchema = new SimpleSchema({

  // Personal data
  name: {
    type: String,
    label: "Nombre completo",
  },
  pseudonym: {
    type: String,
    label: "Nombre artistico",
    optional: true,
  },
  nationality: {
    type: String,
    label: "Nacionalidad",
  },
  age: {
    type: Number,
    label: "Edad",
    min: 0,
  },
  address: {
    type: Object,
  },
  "address.$.streetAndNumber": {
    type: String,
    label: "Calle y Numero",
    optional: false,
  },
  "address.$.neighborhood": {
    type: String,
    label: "Colonia",
    optional: false,
  },
  "address.$.municipality": {
    type: String,
    label: "Municipio",
    optional: false,
  },
  "address.$.state": {
    type: String,
    label: "Estado",
    autoform: {
      type: "select",
      options: function() {
        return Estados; 
      },
    }
  },
  "address.$.zip": {
    type: String,
    label: "C.P.",
  },
  telephone: {
    type: String,
    label: "Telefono / Fax",
    autoform: {
      'placeholder': '(123) 456 7890', 
    },
  },
  scholarity: {
    type: String,
    label: "Nivel de Escolaridad",
    autoform: {
      type: "select",
      options: function() {
        return [
        { value: 'media-superior', label: 'Media Superior'},
        { value: 'tecnica', label: 'Técnica'},
        { value: 'superior', label: 'Superior'},
        { value: 'posgrado', label: 'Posgrado'},
        ];
      },
    },
    allowedValues: [
      'Media Superior',
      'Técnica',
      'Superior',
      'Posgrado',
      ],
  },

  // Works
  works: {
    type: [Object],
    min: 1,
    label: "Obras",
  },
  "works.$.image": {
    type: String,
    autoform: {
      type: "imageUpload",
    },
  },
  "works.$.title": {
    type: String,
    label: "Título",
    optional: true,
  },
  "works.$.date": {
    type: Date,
    label: "Fecha",
    optional: true,
  },
  "works.$.place": {
    type: String,
    label: "Lugar",
    optional: true,
  },
  "works.$.width": {
    type: Number,
    label: "Ancho (cm)",
  },
  "works.$.height": {
    type: Number,
    label: "Alto (cm)",
  },
  "works.$.medium": {
    type: String,
    label: "Técnica",
  },

  // Series
  series: {
    type: Object,
    label: "Obra",
  },
  "series.$.title": {
    type: String,
    label: "Título de la Serie",
  },
  "series.$.date": {
    type: Date,
    label: "Fecha de la Serie",
  },
  "series.$.type": {
    type: String,
    label: "Tipo",
    allowedValues: [
      "Foto",
      "Proyecto audiovisual/multimedia",
      "Instalación (3D)",
      ],
  },
  "series.$.description": {
    type: String,
    label: "Descripción del proyecto",
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },
  "series.$.layout": {
    type: String,
    label: "Croquis explicativo de montaje",
    autoform: {
      type: "imageUpload",
    },
  },
  "series.$.requirements": {
    type: String,
    label: "Requerimientos especiales del montaje",
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },

  cv: {
    type: String,
    label: "Semblanza curricular",
    max: 1500,
    autoform: {
      type: 'textarea',
      rows: 10,
    },
  },

  identificationDocument: {
    type: String,
    label: "Documento de identificación (IFE o documento probatorio)",
    autoform: {
      type: "imageUpload",
    },
  },

  // Hidden
  folioNumber: {
    type: Number,
    label: "Numero de Folio",
    min: 0,
  },

  rating: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },

});
