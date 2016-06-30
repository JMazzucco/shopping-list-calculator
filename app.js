const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const users = require('./routes/users');
const app = express();
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

    productsJson.forEach(function (product) { //change to the filter funcntion

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


      console.log(totalKilograms);
  });


}).on('error', (e) => {
  console.error(e);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
