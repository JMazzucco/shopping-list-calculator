$.getJSON( "/computers", function( data ) {

  var items = [];
  $.each( data, function( i, obj ) {
  	console.log(obj.title);


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
  	console.log(obj.title);


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



    //***MOVE TO CLIENT SIDE***

    // // get total price and weight
    //   let totalPrice = 0;
    //   let totalGrams = 0;

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


