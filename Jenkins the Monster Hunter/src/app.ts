abstract class Person {
    abstract name: string;
    

    display(): void{
        console.log(this.name);
        
    }
    
}

class Employee extends Person { 
    
    name: string;
    latitude: number;
    longitude: number;
    weaknesses: number;
    speed: number;
    power: number;
    
    constructor(name: string, latitude: number, longitude: number, weaknesses: number, speed: number, power: number) { 
        super(); // must call super()
        
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.weaknesses = weaknesses;
        this.speed = speed;
        this.power = power;
    }
}

let emp: Person = new Employee("James", 90, 180, 35, 78, 60);
emp.display(); //James

var names = ['Automatons', 'Bane', 'Bigfoot', 'Drakon', 'Minotaur', 'Wolfman'];
names.sort();
console.log(names);
