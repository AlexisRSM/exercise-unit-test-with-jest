// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Import the function from app.js
const { fromEuroToDollar } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
// Import the function from app.js
const {fromDollarToYen} = require('./app.js');

test("One dollar should be 106.5 yen", function() {
    

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 dollar is 106.5 yen, then 3.5 dollars should be (3.5 * 106.5)
    const expected = 3.5 * 106.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(372.75); // 1 dollar is 106.5 yen, then 3.5 dollars should be = (3.5 * 106.5)
})

// Import the function from app.js
const {fromYenToPound} = require('./app.js');

test("One yen should be 0.0067 pound", function() {
    

    // Use the function like its supposed to be used
    const pound = fromYenToPound(3.5);

    // If 1 yen is 0.0067 pound, then 3.5 yen should be (3.5 * 0.0067)
    const expected = 3.5 * 0.0067; 
    
    // This is the comparison for the unit test
     expect(parseFloat(fromYenToPound(3.5))).toBe(0.02345); // 1 yen is 0.0067 pound, then 3.5 yen should be = (3.5 * 0.0067)
})