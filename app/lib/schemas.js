SimpleSchema.debug = true;

ApplicationSchema = new SimpleSchema({

  // Personal data
  name: {
    type: String,
    label: "Nombre",
  },
  nationality: {
    type: String,
    label: "Nacionalidad",
  },
  age: {
    type: Number,
    label: "Edad",
  },
  address: {
    type: Object,
  },
  "address.$.streetAndNumber": {
    type: String,
    label: "Calle y Numero",
  },
  "address.$.neighborhood": {
    type: String,
    label: "Colonia",
  },
  "address.$.municipality": {
    type: String,
    label: "Municipio",
  },
  "address.$.state": {
    type: String,
    label: "Estado",
    autoform: {
      type: "select",
      options: function() {
        return [
        { value: 'a', label: 'a', },
        { value: 'b', label: 'b', },
        ];
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
  },
  scholarity: {
    type: String,
    label: "Nivel de Escolaridad",
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
  "works.$.size": {
    type: Object,
    label: "Tamaño",
  },
  "works.$.size.width": {
    type: Number,
    label: "Ancho (cm)",
  },
  "works.$.size.height": {
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
    label: "Marco conceptual (propósito y/o significado de la obra)",
  },
  "series.$.layout": {
    type: String,
    label: "Croquis explicativo de montaje",
  },
  "series.$.requirements": {
    type: String,
    label: "Requerimientos especiales del montaje",
  },

  // Curriculum
  cv: {
    type: String,
    label: "C.V.",
    max: 2000,
    autoform: {
      type: 'textarea',
      rows: 5,
    },
  },
  identificationDocument: {
    type: String,
    label: "Documento de identificación (IFE o documento probatorio)",
  },

  // Hidden
  folioNumber: {
    type: Number,
    label: "Numero de Folio",
  },

  rating: {
    type: Number,
    defaultValue: 0,
  },
});
