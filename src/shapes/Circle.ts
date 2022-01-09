class Circle {
    private readonly radius;
    
    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

export default Circle;