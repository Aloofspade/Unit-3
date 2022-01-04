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