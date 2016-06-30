const https = require('https');

https.get('https://shopicruit.myshopify.com/products.json?limit=250', (res) => {

	let productsData = "";

  res.on('data', (d) => {
    productsData += d;
  });

  res.on('end', (d) => {
    let productsJson = JSON.parse(productsData).products;
    let computers = [];
    let keyboards = [];

    productsJson.forEach(function (product) {

    	let addVariantToArray = function(array) {
    		  product.variants.forEach(function (variant) {
          variant.product_title = product.title;
          array.push(variant);
        });
    	}

      if (product.product_type === 'Keyboard') {
      	addVariantToArray(keyboards);
      } else if (product.product_type === 'Computer') {
				addVariantToArray(computers);
      };

    });

    // sort arrays by price
    computers.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });

    keyboards.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });

    let difference = -Math.abs(keyboards.length - computers.length); // Get the difference of the lengths of the arrays

    // Reduce the value of difference from the highest array
    keyboards.length > computers.length ? keyboards.slice(difference) : computers.splice(difference);

    exports.computers = computers;
		exports.keyboards = keyboards;

  });


}).on('error', (e) => {
  console.error(e);
});

