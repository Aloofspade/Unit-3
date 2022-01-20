"use strict";
class Person {
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, code) {
        super(); // must call super()
        this.empCode = code;
        this.name = name;
    }
}
let emp = new Employee("James", 100);
emp.display(); //James
class Circle {
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    calculateCircumference(radius) {
        return 2 * Circle.pi * radius;
    }
}
Circle.pi = 3.14;
Circle.calculateArea(5); // returns 78.5
let circleObj = new Circle();
circleObj.calculateCircumference(5); // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this
//# sourceMappingURL=app.js.map