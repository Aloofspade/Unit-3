



//! Property Deco - gets 2 args
// * target 
// * name - the name of the property 


function ProLog(target: any, propName: string | Symbol){
    console.log("PROPERTY DECO");
    console.log(target);
    console.log(propName);
    
    
    
}

//! Accessor Deco - gets 2 args
// * target 
// * name - the name of the accessor
// * description of the accessor  


function AccLog(target: any, accName: string | Symbol, desc: PropertyDescriptor){
    console.log("ACCESSOR DECO");
    console.log(target);
    console.log(accName);
    console.log(desc);
    
    
    
    
}


//! Method Deco - gets 2 args
// * target 
// * name - the name of the Method
// * description of the Method 


function MetLog(target: any, metName: string | Symbol, desc: PropertyDescriptor){
    console.log("METHOD DECO");
    console.log(target);
    console.log(metName);
    console.log(desc);
    
    
    
    
}

//! Parameter Deco - gets 2 args
// * target 
// * name - the name of the parameter
// *  position of the parameter 


function ParLog(target: any, parName: string | Symbol, position: number ){
    console.log("PARAMETER DECO");
    console.log(target);
    console.log(parName);
    console.log(position);
    
    
    
    
}


class Product {
    @ProLog 
    title: string;
   private _price: number;
    @AccLog
    set price(val: number){
        if (val > 0){
            this._price = val;
        } else {
            throw new Error("please enter a valid price")
        }
    }



    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @MetLog
    getPriceWithTax(@ParLog tax: number = 0.1){
         return this._price * (1 + tax);
    }
}