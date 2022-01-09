class AreaCalculator {
    constructor(shapes) {
        this.shapes = shapes;
    }
    sum() {
        let areaShapes = 0;
        this.shapes.forEach((shape) => {
            areaShapes += shape.getArea();
        });
        return `Sum of all areas are ${areaShapes}`;
    }
}
export default AreaCalculator;
