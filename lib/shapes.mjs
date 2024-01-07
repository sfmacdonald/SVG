// Function to create SVG circle 
function createCircle() {
    return `<circle cx="50%" cy="50%" r="80" />`;
}
  
// Function to create SVG equilateral triangle
function createTriangle() {
    const centerX = 100; // X-coordinate of the triangle's center
    const centerY = 140; // Y-coordinate of the triangle's center
    const sideLength = 80; // Length of each side of the equilateral triangle

    // Calculate the coordinates of the three vertices of the equilateral triangle
    const x1 = centerX;
    const y1 = centerY - sideLength / Math.sqrt(3);
    const x2 = centerX - sideLength / 2;
    const y2 = centerY + sideLength / (2 * Math.sqrt(3));
    const x3 = centerX + sideLength / 2;
    const y3 = centerY + sideLength / (2 * Math.sqrt(3));

    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" />`;
}
  
// Function to create SVG square 
function createSquare() {
    return `<rect x="40" y="40" width="200" height="200" />`;
}
  
export { createCircle, createTriangle, createSquare };
  