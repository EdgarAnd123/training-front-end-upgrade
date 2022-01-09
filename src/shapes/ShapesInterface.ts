import Circle from "./Circle";
import Cuboid from "./Cuboid";
import Square from "./Square";
import Triangle from "./Triangle";

export interface ShapesInterface {
    [x: string]: any;
    [index:number]: Square|Circle|Triangle|Cuboid;
}