console.log("inside warmup file");
/* 
Create a class called Circle. It should have one property called radius.

The Circle class should have the following methods:

getDiameter
getCircumference
getArea
Instantiate a couple of circles and log out their diameter, circumference and area.

Here is an example:

const circle = new Circle(10);
circle.getDiameter(); // 20
*/

class Circle{
    constructor(radius){
        this.radius=radius;

    }

    getDiameter(){
        console.log('Diameter is :'+this.radius*2);

    }
    getCircumference(){
        console.log('Circumference is  :  '+(2*3.14*this.radius).toFixed(2));
        

    }
    getArea(){
        console.log('Area is :  '+(3.14*(this.radius*this.radius)).toFixed(2));

    }

}
const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();