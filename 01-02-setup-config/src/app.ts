console.log("pong");


let username: string;

const appID = 12345;

const add = (n1: number, n2: number = 10) => {
   return console.log(n1 + n2);
    
};


const userObj = {
    user: "Jimmy",
    id: 12345
};

const { user, id } = userObj;

const numArray =  [1,2,3,4];

const addAll = (employeeName: string, ...numbers: number[]) => {
    console.log(`${employeeName} is working`);
    return numbers.reduce((curr, next) => {
        return curr + next;
     }, 0);
    

};

console.log(addAll("Keano", ...numArray));


console.log(userObj);

const button = document.querySelector('button')!;

if(button){
button?.addEventListener('click', () => {
    console.log('ping');
    
})
} else {
    console.log(void 0);
    
}