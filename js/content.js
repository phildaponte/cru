$(document).ready( function() {
	Tabletop.init( { key: '1BW-pNTzyFVvuBL_KP6riNwt1B2tmY4p9LwdgKqmd6qI',
                 callback: showInfo,
                 parseNumbers: true } );
});

function showInfo(data, tabletop) {

  console.log(data);

  var signatureSource   = $("#signatureScript").html();
  var signatureTemplate = Handlebars.compile(signatureSource);
  $.each( tabletop.sheets("Signatures").all(), function(i, signatureSource) {
    var html = signatureTemplate(signatureSource);
    $("#signatures").append(html);
  });

  var cruSource   = $("#cruScript").html();
  var cruTemplate = Handlebars.compile(cruSource);
  $.each( tabletop.sheets("Crus").all(), function(i, cruSource) {
    var html = cruTemplate(cruSource);
    $("#cru").append(html);
  });

  var entreeSource   = $("#entreeScript").html();
  var entreeTemplate = Handlebars.compile(entreeSource);
  $.each( tabletop.sheets("Entrees").all(), function(i, entreeSource) {
    var html = entreeTemplate(entreeSource);
    $("#entree").append(html);
  });

  var platSource   = $("#platScript").html();
  var platTemplate = Handlebars.compile(platSource);
  $.each( tabletop.sheets("Plats").all(), function(i, platSource) {
    var html = platTemplate(platSource);
    $("#plats").append(html);
  });

  var accompagnementSource   = $("#accompagnementScript").html();
  var accompagnementTemplate = Handlebars.compile(accompagnementSource);
  $.each( tabletop.sheets("Accompagnements").all(), function(i, accompagnementSource) {
    var html = accompagnementTemplate(accompagnementSource);
    $("#accompagnements").append(html);
  });

}