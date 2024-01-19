// Base class for all shapes
class Shape {
    constructor() {
        this.color = 'black'; // Default color
    }

    setColor(color) {
        this.color = color;
    }
}

// Triangle class
class Triangle extends Shape {
    render() {
        // Return an SVG string for a triangle
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Circle class
class Circle extends Shape {
    render() {
        // Return an SVG string for a circle
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Square class
class Square extends Shape {
    render() {
        // Return an SVG string for a square
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

// Export the classes for use in other files
module.exports = { Triangle, Circle, Square };
