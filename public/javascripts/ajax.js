var totalPrice = 0;
var totalGrams = 0;

var populateTable = function(data){
  var items = [];
  $.each( data, function( i, obj ) {

	  totalPrice += parseFloat(obj.price);
	  totalGrams += parseFloat(obj.grams);

	  items.push(
	  	"<tr>" +
	      "<td>"+ obj.product_title + "</td>" +
	      "<td>"+ obj.title + "</td>" +
	      "<td>"+ Math.round((obj.grams / 1000)) + " kg" + "</td>" +
	      "<td>"+ "$" + obj.price + "</td>" +
	    "</tr>"
	   );

  });

	$( "tbody" ).append( items );
}

var populateTotals = function(){
	$( "tbody" ).append(
		"<tr class='info'>" +
      "<td>TOTAL:</td>" +
      "<td></td>" +
      "<td>"+ Math.round((totalGrams / 1000)) + " kg" +  "</td>" +
      "<td>"+ "$" + (totalPrice.toFixed(2)) + "</td>" +
    "</tr>"
   );
};

$.getJSON( "/computers", function( data ) { populateTable(data); });
$.getJSON( "/keyboards", function( data ) { populateTable(data); populateTotals(); });