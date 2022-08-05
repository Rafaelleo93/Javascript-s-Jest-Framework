const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', ()=> {

    let total = sum (14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
   
    const { fromEuroToDollar } = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 106.58333333333334 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(5.6)).toBe(596.8666666666667);
})

test("One yen should be 0.006254886630179828 pound", function(){
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(18)).toBe(0.11258795934323691);
})