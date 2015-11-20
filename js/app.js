$(document).ready(function(){
  $('#calculate').on('click',function(e){
    var departure = $('#departure option:selected').val();
    var arrival = $('#arrival option:selected').val();
    var bags = $('#bags').val();
    var price = getPrice(departure, arrival);
    var checkedBaggageFee = getCheckedBaggageFee(bags);
    var totalCost = price + checkedBaggageFee;
    var msg = "Your price is $" + totalCost;
    $('#price').text(msg);
    e.preventDefault();
  });
});
