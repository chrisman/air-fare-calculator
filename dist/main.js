(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var calculate = require('./logic');

$(document).ready(function(){
  $('#calculate').on('click',function(e){

    // Get input from the app/user
    var departure = $('#departure option:selected').val();
    var arrival = $('#arrival option:selected').val();
    var travelClass = $('#class option:selected').val();
    var wifi = $('#wifi').prop('checked');
    var bags = $('#bags').val();
    var discount = $('#discount').val();

    // Perform calculations on input
    var price = calculate.getPrice(departure, arrival);
    var checkedBaggageFee = calculate.getCheckedBaggageFee(bags);
    var travelClassFee = calculate.getClass(travelClass);
    var wifiFee = calculate.getWifi(wifi);
    var discountOff = calculate.getDiscount(discount);

    var totalCost = (price - (price * discountOff)) + checkedBaggageFee + travelClassFee + wifiFee;
    var msg = "Your price is $" + totalCost;

    // return calculation to app
    $('#price').text(msg);
    e.preventDefault();
  });
});

},{"./logic":2}],2:[function(require,module,exports){
module.exports = {
  getPrice: function(f, t) {
    if (f === t) return 0;
    if (f === 'chicago' && t === 'losangeles') return 350;
    if (f === 'losangeles' && t === 'chicago') return 350;
    if (f === 'chicago' && t === 'newyork') return 250;
    if (f === 'newyork' && t === 'chicago') return 250;
    if (f === 'losangeles' && t === 'newyork') return 545;
    if (f === 'newyork' && t === 'losangeles') return 545;
  },
  getCheckedBaggageFee: function(n) {
    return (n > 0) ? (n * 25) : 0;
  },
  getClass: function(s) {
    return (s === 'business') ? 200 : (s === 'first') ? 500 : 0;
  },
  getWifi: function(b) {
    return (b) ? 12 : 0;
  },
  getDiscount: function(s) {
    return (s === '10OFF') ? 0.1 : (s === '20OFF') ? 0.2 : 0;
  }
}

},{}]},{},[1]);
