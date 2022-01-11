function Autobind(_: any, _2:any, desc: PropertyDescriptor) {
console.log(desc);
const originalMethod = desc.value;
const newMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get(){
        const boundFn = originalMethod.bin(this);
        return boundFn;
    },


}

return newMethod;
}

class Printer {
    message = "It's Working";
    @Autobind 
    showMessage(){
        console.log(this.message);
        
    }
}


 const p = new Printer();
 console.log(p);
 
 p.showMessage(); 
 //! this.message <= "this" refers to the p: Printer class

 const button = document.querySelector('button')!;
 
 button.addEventListener("click", p.showMessage.bind(p));
 button.addEventListener("click", p.showMessage);
 //! click has a copy of showMessage => "this" refers to the event click 
