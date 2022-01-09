import AreaCalculator from "./shapes/AreaCalculator.js";
import Square from "./shapes/Square.js";
import Circle from "./shapes/Circle.js";
import Triangle from "./shapes/Triangle.js";
import VolumeCalculator from "./shapes/VolumeCalculator.js";
import Cuboid from "./shapes/Cuboid.js";
import MysqlDb from "./shapes/MysqlDb.js";
(() => {
    const square = new Square(2);
    const circle = new Circle(2);
    const triangle = new Triangle(10, 2);
    const cuboid = new Cuboid(3);
    const mysqlDb = new MysqlDb();
    //Single Responsability
    const areaCalculator = new AreaCalculator([square, circle]);
    console.log('Single Responsability: ', areaCalculator.sum());
    //Open / Closed
    const areaCalculatorWithOpenClosed = new AreaCalculator([square, circle, triangle]);
    console.log('Open/Closed: ', areaCalculatorWithOpenClosed.sum());
    //Liskov
    const volumeCalculator = new VolumeCalculator([square, circle, triangle]);
    console.log('Liskov: ', volumeCalculator.sum());
    //Interface Segregation
    const cuboidCalculator = new AreaCalculator([square, circle, triangle, cuboid]);
    console.log('Interface: ', cuboidCalculator.sum());
    //Dependency Inversion
    console.log('Dependency Inversion: ', mysqlDb.connect());
})();
