$.getJSON( "/computers", function( data ) {

  var items = [];
  $.each( data, function( i, obj ) {
  	console.log(obj.title);


    items.push("<tr>" +
                "<td>"+ obj.product_title + "</td>" +
                "<td>"+ obj.title + "</td>" +
                "<td>"+ obj.grams + "</td>" +
                "<td>"+ obj.price + "</td>" +
              "</tr>"
              );

  });

$( "tbody" ).append( items );

});

$.getJSON( "/keyboards", function( data ) {

  var items = [];
  $.each( data, function( i, obj ) {
  	console.log(obj.title);


    items.push("<tr>" +
                "<td>"+ obj.product_title + "</td>" +
                "<td>"+ obj.title + "</td>" +
                "<td>"+ obj.grams + "</td>" +
                "<td>"+ obj.price + "</td>" +
              "</tr>"
              );

  });

$( "tbody" ).append( items );

});



