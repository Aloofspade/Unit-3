let num: number = 5
const user: string = "Jimmy";


const add = (n1: number, n2: number): string  => {
    console.log(n1 + n2);

    return `the sum is ${n1 + n2}`
    
}

const addAndHandle = (
    n1: number, 
    n2: number, 
    cb: (something: string) => void

): void => {
    const result = n1 + n2
    cb(`${result}`)
}

addAndHandle(5, 69, (result) => {
    console.log(result);
    
})





//!create a function template 
//!takes 2 strings and contains them 
//!#1

const concat = (
    text1: string, 
    text2: string,
    cb: (anything: string) => void 
 ) => {

const result = text1 + " " + text2
cb(result)

}


concat('this', 'that', (variable) => {
    console.log(variable);
    
})


//!#2


 
const concatAll = (
    cb: (result: string) => void,
...strings: string[]
    
    ) => {
    const result = strings.join(" ") 
     cb(result)
 };

 //! #3 take a string and number and a boolean if the boolean is true you are going to make a both input numbers and return numbers input1 + input2 
 //! if the boolean is false you convert both to strings and return input1 + input2

//* 1 + 1 = 2
//* '1' + '1' = '11'


const part3 = (
    input1: string, 
    input2: number, 
    bool: boolean

) => {
    if (bool === true) {
        return + input1 + input2
    } else {
        return input1 + input2;
    }
}
 

