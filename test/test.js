var code = require('../js/logictest');
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

describe('getCheckedBaggageFee', function(){
  it('should increase the price by 25 dollars per bag',function(){
    expect(code.getCheckedBaggageFee(1)).to.equal(25);
    expect(code.getCheckedBaggageFee(2)).to.equal(50);
    expect(code.getCheckedBaggageFee(4)).to.equal(100);
    expect(code.getCheckedBaggageFee(0)).to.equal(0);
  });
  it('should NOT go down if the user enters a negative number',function(){
    expect(code.getCheckedBaggageFee(-1)).to.equal(0);
    expect(code.getCheckedBaggageFee(-5)).to.equal(0);
  });
});
