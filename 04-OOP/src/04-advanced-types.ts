//! type casting

const input = document.querySelector('input')!;
const input1 = document.querySelector('#input') as HTMLInputElement
const input2 = <HTMLInputElement>document.querySelector('#input');
const input3: HTMLInputElement = document.querySelector('#input')!;


input3.value


let users: string[] = [];
let names: Array<string> = []

//! async function => i will return something with this. PROMISE 
//! then you return => 
//! if you succeeded you return resolved 
//! else you return rejected 
//! you use .then to do the next step once resolved 


const promise: Promise<string> = new Promise((resolve:any, reject: any) => {
    setTimeout(() => {
        resolve("DONE")
    }, 2000);
    reject("FAILED")
});


promise.then(data => console.log(data.split(" "))); // DONE
promise.catch(data => console.log(data)); //FAILED


//! Generics 

function merge<T extends object, U extends object>(objA: T, objB: U){
   return Object.assign(objA, objB)
}


const mergeObjs = merge({name: "Jimmy", id: 123456}, {age: 30});


console.log(mergeObjs);
console.log(mergeObjs.name);

interface HasLength {
    length: number
}


function countAndDescribe<T extends HasLength>(value: T):  [T, string]{
    let descText = 'no value'
    if(value.length === 1){
        descText = 'got 1 value'
    } else if (value.length) {
        descText = `got ${value.length} values`
    }

    return [value,descText];
}

console.log("cooking");
console.log([123, "testing"]);



function extractAndConvert<T extends object,  U extends keyof T>(obj:T, key:U): string {
    return `Value ${obj[key]}`
}


extractAndConvert({name: "jimmy"}, 'name');//JImmy

class DataStorage<T extends string | number | boolean> {

    private data: T[] = [];


    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1) return
        else this.data.splice(this.data.indexOf(item), 1)
    }


}



const textStorage = new DataStorage<string>()
const numStorage = new DataStorage<number>()


textStorage.addItem("45")