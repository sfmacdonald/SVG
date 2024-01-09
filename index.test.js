// Import functions from the file
const { createCircle, createTriangle, createSquare } = import('./index.mjs');

// Function to test the createCircle function
function testCreateCircle() {
    const result = createCircle();
    console.log('Test createCircle:');
    console.log('Expected: <circle cx="50%" cy="50%" r="80" />');
    console.log('Actual:   ' + result);
}

// Function to test the createTriangle function
function testCreateTriangle() {
    const result = createTriangle();
    console.log('Test createTriangle:');
    console.log('Expected: <polygon points="100,60 50,200 150,200" />');
    console.log('Actual:   ' + result);
}

// Function to test the createSquare function
function testCreateSquare() {
    const result = createSquare();
    console.log('Test createSquare:');
    console.log('Expected: <rect x="40" y="40" width="200" height="200" />');
    console.log('Actual:   ' + result);
}

// Call the test functions
testCreateCircle();
testCreateTriangle();
testCreateSquare();