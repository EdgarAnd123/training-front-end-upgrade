import ShapeInterface from "./ShapeInterface";
import ThreeDimensionalShapeInterface from "./ThreeDimensionalShapeInterface";

class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface {
    private readonly length;

    constructor (length: number) {
        this.length = length;
    }

    calculateThreeDimensionalArea() {
        return Math.pow(this.length, 3);
    }

    getArea() {
        return this.calculateThreeDimensionalArea();
    }
}

export default Cuboid;