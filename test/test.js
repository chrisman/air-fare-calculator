var code = require('../js/logic');
var expect = require('chai').expect;

describe('getPrice', function(){
  it('should return zero price if departure and arrival are the same', function(){
    expect(code.getPrice('chicago','chicago')).to.equal(0);
    expect(code.getPrice('newyork','newyork')).to.equal(0);
    expect(code.getPrice('losangeles','losangeles')).to.equal(0);
  });
  it('should return 350 for flights between Chicago and Los Angeles', function(){
    expect(code.getPrice('chicago','losangeles')).to.equal(350);
    expect(code.getPrice('losangeles','chicago')).to.equal(350);
  });
  it('should return 250 for flights between Chicago and New York', function(){
    expect(code.getPrice('chicago','newyork')).to.equal(250);
    expect(code.getPrice('newyork','chicago')).to.equal(250);
  });
  it('should return 545 for flights between Los Angeles and New York', function(){
    expect(code.getPrice('losangeles','newyork')).to.equal(545);
    expect(code.getPrice('newyork','losangeles')).to.equal(545);
  });
});
