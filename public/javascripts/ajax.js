var totalPrice = 0;
var totalGrams = 0;


$.getJSON( "/computers", function( data ) {

  var items = [];
  $.each( data, function( i, obj ) {

  totalPrice += parseFloat(obj.price);
  totalGrams += parseFloat(obj.grams);

    items.push("<tr>" +
                "<td>"+ obj.product_title + "</td>" +
                "<td>"+ obj.title + "</td>" +
                "<td>"+ Math.round((obj.grams / 1000)) + " kg" + "</td>" +
                "<td>"+ "$" + obj.price + "</td>" +
              "</tr>"
              );

  });

$( "tbody" ).append( items );




});

$.getJSON( "/keyboards", function( data ) {

  var items = [];
  $.each( data, function( i, obj ) {

  totalPrice += parseFloat(obj.price);
  totalGrams += parseFloat(obj.grams);

    items.push("<tr>" +
                "<td>"+ obj.product_title + "</td>" +
                "<td>"+ obj.title + "</td>" +
                "<td>"+ Math.round((obj.grams / 1000)) + " kg" + "</td>" +
                "<td>"+ "$" + obj.price + "</td>" +
              "</tr>"
              );

  });

	$( "tbody" ).append( items );


	$( "tbody" ).append(


							"<tr class='info'>" +
                "<td>TOTAL:</td>" +
                "<td></td>" +
                "<td>"+ Math.round((totalGrams / 1000)) + " kg" +  "</td>" +
                "<td>"+ "$" + (totalPrice.toFixed(2)) + "</td>" +
              "</tr>"



              );
});



    //   keyboards.forEach(function (keyboard) {
    //     totalPrice += parseFloat(keyboard.price)
    //     totalGrams += parseFloat(keyboard.grams);
    //   });

    //   computers.forEach(function (computer) {
    //     totalPrice += parseFloat(computer.price)
    //     totalGrams += parseFloat(computer.grams);
    //   });

    //   totalPrice = totalPrice.toFixed(2);
    //   totalKilograms = (totalGrams / 1000).toFixed();


