//! if you are creating a interface for a function the proper convention is to write Fn  

interface AddFn {
    (a: number, b: number): number
}

let add: AddFn;

add = (n1:number, n2: number) => {
    return n1 + n2
}

const add2: AddFn = (n1, n2) => {
    return n1 + n2
}

//! interfaces were created to help with classes not to much with functions 


interface Named {
    readonly name?: string; 
    outputName?: string
}

interface Greatable extends Named {
    greet(phrase: string): void;
}

class Person implements Greatable {
    name?: string;
    age: number = 30

    constructor (name?: string) {
        if(name) this.name = name
    }


    greet (phrase: string){
        if(this.name){
        console.log(`${phrase} ${this.name}`);
        } else {
            console.log(`${phrase}`);
            
        }
    }
}


const Jimmy = new Person("Jimmy")
Jimmy.greet('Welcome')
console.log(Jimmy);


const anon = new Person()
anon.greet('Hey There')
console.log(anon);

