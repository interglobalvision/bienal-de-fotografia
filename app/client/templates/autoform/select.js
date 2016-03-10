Template.afSelect_igv_materialize.helpers({
  attrs: function(atts) {
    var context, formId, isInvalid, ss;
    formId = AutoForm.getFormId();
    ss = AutoForm.getFormSchema();
    context = ss.namedContext(formId);
    isInvalid = context.keyIsInvalid(atts.name);
    if (isInvalid) {
      atts = AutoForm.Utility.addClass(atts, "invalid");
    } else {
      atts = removeClass(atts, "invalid");
    }
    return atts;
  },

  optionAtts: function() {
    var atts, item;
    item = this;
    atts = {
      value: item.value
    };
    if (item.selected) {
      atts.selected = '';
    }
    return atts;
  },
});

Template.afSelect_igv_materialize.onRendered( function() {
  var template = this
  var select = template.$('select')
  select.material_select()

  var initialize = _.debounce(function () {
    select.material_select()
  }, 500)

  template.autorun(function () {
    // reinitialize select when data changes
    Template.currentData()
    initialize()
  })
});

function removeClass(atts, klass) {
  if (typeof atts["class"] === "string") {
    atts["class"].replace(klass, '');
  }
  return atts;
};
