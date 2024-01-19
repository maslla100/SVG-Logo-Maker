const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
    describe('Triangle', () => {
        test('render method returns correct SVG string', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            const svgString = triangle.render();
            expect(svgString).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Circle', () => {
        test('render method returns correct SVG string', () => {
            const circle = new Circle();
            circle.setColor('red');
            const svgString = circle.render();
            expect(svgString).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });

    describe('Square', () => {
        test('render method returns correct SVG string', () => {
            const square = new Square();
            square.setColor('green');
            const svgString = square.render();
            expect(svgString).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
        });
    });
});
