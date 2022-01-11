"use strict";
//! this breaks because it does not have enough args 
// function Logger() {
//     console.log("testing");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// }
//! class deco - takes 1 arg
// * target- this is the constructor for the class 
// function Logger(target: any){
//     console.log('CLASS DECO');
//     console.log(target);
// }
//! Deco Factory 
function Logger(toLog) {
    console.log('CLASS DECO -' + toLog);
    return function (target) {
        console.log('CLASS DECO');
        console.log(target);
    };
}
let Person = 
// @Logger("Steven") 
// @Logger("Peggy") 
// @Logger("Jimmy") 
// @Logger("John") 
class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating Person");
    }
};
Person = __decorate([
    Logger("Person"),
    WithTemplate("<h1> Person Template </h1>", "app")
    // @Logger("Steven") 
    // @Logger("Peggy") 
    // @Logger("Jimmy") 
    // @Logger("John") 
], Person);
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
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    //! if we want to ignore a param we can replace it with a _ 
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
//# sourceMappingURL=01-basics.js.map