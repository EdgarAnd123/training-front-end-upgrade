import { ShapesInterface } from './ShapesInterface';

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: ShapesInterface) {
    this.shapes = shapes;
  }

  sum() {
    let areaShapes = 0;
    this.shapes.forEach((shape: ShapesInterface) => {
      areaShapes += shape.getArea();
    });
    return `Sum of all areas are ${areaShapes}`;
  }
}

export default AreaCalculator;