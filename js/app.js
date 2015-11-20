$(document).ready(function(){
  $('#calculate').on('click',function(e){
    var departure = $('#departure option:selected').val();
    var arrival = $('#arrival option:selected').val();
    var travelClass = $('#class option:selected').val();
    var wifi = $('#wifi').prop('checked');
    var bags = $('#bags').val();

    var price = getPrice(departure, arrival);
    var checkedBaggageFee = getCheckedBaggageFee(bags);
    var travelClassFee = getClass(travelClass);
    var wifiFee = getWifi(wifi);
    
    var totalCost = price + checkedBaggageFee + travelClassFee + wifiFee;

    var msg = "Your price is $" + totalCost;
    $('#price').text(msg);
    e.preventDefault();
  });
});
