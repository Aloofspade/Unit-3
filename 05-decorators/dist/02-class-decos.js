"use strict";
//! Property Deco - gets 2 args
// * target 
// * name - the name of the property 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function ProLog(target, propName) {
    console.log("PROPERTY DECO");
    console.log(target);
    console.log(propName);
}
//! Accessor Deco - gets 2 args
// * target 
// * name - the name of the accessor
// * description of the accessor  
function AccLog(target, accName, desc) {
    console.log("ACCESSOR DECO");
    console.log(target);
    console.log(accName);
    console.log(desc);
}
//! Method Deco - gets 2 args
// * target 
// * name - the name of the Method
// * description of the Method 
function MetLog(target, metName, desc) {
    console.log("METHOD DECO");
    console.log(target);
    console.log(metName);
    console.log(desc);
}
//! Parameter Deco - gets 2 args
// * target 
// * name - the name of the parameter
// *  position of the parameter 
function ParLog(target, parName, position) {
    console.log("PARAMETER DECO");
    console.log(target);
    console.log(parName);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("please enter a valid price");
        }
    }
    getPriceWithTax(tax = 0.1) {
        return this._price * (1 + tax);
    }
}
__decorate([
    ProLog
], Product.prototype, "title", void 0);
__decorate([
    AccLog
], Product.prototype, "price", null);
__decorate([
    MetLog,
    __param(0, ParLog)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=02-class-decos.js.map