var calculate = require('./logictest');

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
