$(document).ready(function(){
  // console.log("it's go time."); // sanity check
  $('#calculate').on('click',function(e){
    var departure = $('#departure option:selected').val();
    var arrival = $('#arrival option:selected').val();
    var price = getPrice(departure, arrival);
    var msg = "Your price is $" + price;
    $('#price').text(msg);
    e.preventDefault();
  });
});
