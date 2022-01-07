let something: unknown;

something * 2;

const mult2 = (n1: number) => {
    console.log(n1 * 2);
    
}


if(typeof something === "number") {
    mult2(something)
}

type Combinable = number | string;
type Conversion = 'as-num' | "as-text";


const combine = (
    input1: Combinable,
    input2: Combinable,
    convert: Conversion,
): Combinable => {
    if (convert === "as-num"){
        return  +input1 + +input2;
    } else {
        return "" + input1 + input2
    }
};

type Item = [string, number, number]
enum Title {
    "NEW",
    "EXPERIENCED",
    "VET"
}

let Hero: {
    health: number,
    name: string,
    stats: {
        strength: number,
        dexterity: number,
        intelligence: number,
    },
    inventory: Item[],
    title: Title
}


//* computer  
//* Case 
//* Memory
//*  size 
//*  brand
//*   peripherals 
//*   speed (2300mhz, 2666Mhz, 2000Mhz)
//*  wires [color, finish, length]

enum Size {"ATX", "MINI_ATX"}
enum Speed {"2300Ms", "2666Ms", "2000Ms"}

let computer: {
 case: {
    size: Size,
    brand: string
 }
 memory:{ 
     size: number,
     brand: string
 }
 peripherals: string[]
speed: Speed
wires: [string, string, number  ]
 
}