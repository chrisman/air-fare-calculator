module.exports = {
   getPrice: function(f, t) {
    // alert("hello");
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
  }
}
