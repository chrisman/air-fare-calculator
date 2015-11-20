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
}
}
