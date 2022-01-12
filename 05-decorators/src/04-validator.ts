interface ValidatorConfig {
    [className: string]: {
        [validatableProp: string]: string[];
    }
}


// * registeredValidators {
// *  Course: {
// *  title: ['require', 'positive', ...],
// *  price: ['positive'],
// *  }
// * }


const registerValidators: ValidatorConfig = {}

function Required(target: any, propName: string){
    //! create a key in the register for the class
    // console.log(target);
    // console.log(propName);
    
    registerValidators[target.constructor.name] = {
        ...registerValidators[target.constructor.name],
        [propName]: ["required"],
    }
}


function PostiveNumber(target: any, propName: string){
   
    registerValidators[target.constructor.name] = {
        ...registerValidators[target.constructor.name],
        [propName]: ["positive"],
    }
}

function validate(obj: any): boolean{
    const objValidatorConfig = registerValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true 
    } 
    let isValid = true
    for(const prop in objValidatorConfig){
        for(const validator of prop){
            switch(validator){
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                    case "positive":
                        isValid = isValid && obj[prop] > 0;
                        break;
            }
        }
    }

    return isValid
}

class Course {
    @Required
    title: string;
    @PostiveNumber
    price: number;

    constructor(t: string, p: number){
            this.title = t;
            this.price = p;
            console.log(registerValidators);
            
    }

}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl= document.getElementById("title") as HTMLInputElement
    const priceEl = document.getElementById("price") as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value


    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)){
        console.error("invalid input/s")
        return
        
    }

    //! this is where you would normally save the object to your database if it was successfully validated 
    console.log(createdCourse);
    
})