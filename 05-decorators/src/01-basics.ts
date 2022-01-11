//! this breaks because it does not have enough args 
// function Logger() {
//     console.log("testing");

    
// }

//! class deco - takes 1 arg
// * target- this is the constructor for the class 
// function Logger(target: any){
//     console.log('CLASS DECO');
//     console.log(target);
    
    
// }


//! Deco Factory 

function Logger(toLog: string){
    console.log('CLASS DECO -' + toLog );
    
   return function (target: any){
    console.log('CLASS DECO');
    console.log(target);
    };
    
}

@Logger("Person") 
@WithTemplate("<h1> Person Template </h1>", "app")
// @Logger("Steven") 
// @Logger("Peggy") 
// @Logger("Jimmy") 
// @Logger("John") 
class Person{
    name = "Max";
    constructor() {
        console.log("Creating Person");
        
    }
}

const max = new Person();


console.log(max);


//! Deco Template 

// function WithTemplate(template: string, hookId: string){
//     console.log('TEMPLATE FACTORY');
//     //! if we want to ignore a param we can replace it with a _ 
//     return function(_: any){
//         const hookEl = document.getElementById("app");
//         if(hookEl) {
//             hookEl.innerHTML = template;
//         }
//     }
    
// }

function WithTemplate(template: string, hookId: string){
    console.log('TEMPLATE FACTORY');
    //! if we want to ignore a param we can replace it with a _ 
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name
        }
    }
    
}