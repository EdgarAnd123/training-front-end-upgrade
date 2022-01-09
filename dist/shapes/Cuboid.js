class Cuboid {
    constructor(length) {
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
