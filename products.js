const https = require('https');

https.get('https://shopicruit.myshopify.com/products.json?limit=250', (res) => {

let productsData = "";

  res.on('data', (d) => {
    productsData += d;
  });

  res.on('end', (d) => {
    let productsJson = JSON.parse(productsData).products;

    // Put calculations here then refactor them out

    // Requirements:
    // An equal number of computers and keyboards.
    // As many different computer and keyboard variants the store has to offer, while buying no duplicate variants.
    // Spend the least amount of money possible.
    // Alice needs to know the total weight of all computers and keyboards so she can plan for enough volunteers to help carry it all.

    let computers = [];
    let keyboards = [];

    productsJson.forEach(function (product) {

      if (product.product_type === 'Keyboard') {

        product.variants.forEach(function (variant) {
          variant.product_title = product.title;
          keyboards.push(variant);
        });

      } else if (product.product_type === 'Computer') {

        product.variants.forEach(function (variant) {
          variant.product_title = product.title;
          computers.push(variant);
        });

      };

    });

    // sort by price
    computers.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });

    keyboards.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });

    let difference = -Math.abs(keyboards.length - computers.length);

    // reduce the value of difference from the highest array

    keyboards.length > computers.length ? keyboards.slice(difference) : computers.splice(difference);

    // get total price and weight
      let totalPrice = 0;
      let totalGrams= 0;

      keyboards.forEach(function (keyboard) {
        totalPrice += parseFloat(keyboard.price)
        totalGrams += parseFloat(keyboard.grams);
      });

      computers.forEach(function (computer) {
        totalPrice += parseFloat(computer.price)
        totalGrams += parseFloat(computer.grams);
      });

      totalPrice = totalPrice.toFixed(2);
      totalKilograms = (totalGrams / 1000).toFixed();

  });


}).on('error', (e) => {
  console.error(e);
});
