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



abstract class Ghosts {
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Ghost extends Ghosts { 
    name: string;
    
    
    constructor(name: string) { 
        super(); // must call super()
        
        
        this.name = name;
    }
}

let emp1: Person = new Ghost("James");
emp1.display(); //James


function stringifyForLogging(value: unknown): string {
    if (typeof value === "function") {
      // Within this branch, `value` has type `Function`,
      // so we can access the function's `name` property
      const functionName = value.name || "(anonymous)";
      return `[function ${functionName}]`;
    }
  
    if (value instanceof Date) {
      // Within this branch, `value` has type `Date`,
      // so we can call the `toISOString` method
      return value.toISOString();
    }
  
    return String(value);
  }

  abstract class Beasts {
    habitat: string;
    defensives: string;

    constructor(habitat: string, defensives: string){
        this.habitat = habitat;
        this.defensives = defensives;
    }

    abstract getScared(): void
  }

  class Beast extends Beasts {
      constructor(habitat: string, defensives: string){
          super(habitat, defensives);
      }

      getScared(): void {
          console.log(`${this.habitat}, ${this.defensives} `);
          
      }
  }


  let defensives: string[] = ['claws', 'scales', 'speed', 'camouflage']; 

for(var index in defensives)
{ 
    console.log(defensives[index]);  
}

for(var i = 0; i < defensives.length; i++)
{ 
    console.log(defensives[i]); 
}

abstract class humanoids  {
    humanness: number;
    compliance: string;

    constructor(humanness: number, compliance: string){
        this.humanness = humanness;
        this.compliance = compliance;
    }

    abstract getScared(): void
  }

  class humanoid extends humanoids {
      constructor(humanness: number, compliance: string){
          super(humanness, compliance);
      }

      getScared(): void {
          console.log(`${this.humanness}, ${this.compliance} `);
          
      }
  }

