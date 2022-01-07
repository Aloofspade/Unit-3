class Example {
    
    private  paycheck = 1000000000
    // private readonly paycheck = 1000000000

   printPay(){
       console.log(this.paycheck);
       
   }
   setPay(num:number) {
       this.paycheck = num
   }
}

const thing1 = new Example()
// thing1.paycheck = 10
// console.log(thing1.paycheck);

thing1.setPay(40);
thing1.printPay();


 

//* gradebook WHOLE THING IS STATIC
//* static array with current grades = (180, 45, 20, 89) 
//* store a passing grade of 65 that cant change 
//* find all the grades that are passing 
//*  takes grades array and find the average 
//* add a new grade to the array 
//* remove the lowest grade from an array 
//* print out all the items in an array (...)


class Gradebook {
    static  grades = [100, 45, 21, 23, 90];
    static readonly passing = 65;

static cleanup() {
    this.grades = this.grades.filter((grade) => {
        return grade >= 0 && grade <= 100;
    })
    return this.grades;
}

    static highestGrade() {
        const max = Math.max(...this.grades)
        console.log(max);
        return this.grades
        
    }

static printGrades() {
    console.log(...this.grades);
    
}

static removeLowest() {
    const min = Math.min(...this.grades);
    const pos = this.grades.indexOf(min);
    this.grades.splice(pos, 1);
    return this.grades;
}

static addGrade(score: number) {
     this.grades.push(score);
    return this.grades
}

    static findAverage(){
        const sum = this.grades.reduce((curr, next) => {
            return curr + next
        }, 0)
        const avg = sum / this.grades.length;

        console.log(avg);
        return avg
        
    }
   



    static findPassing(): number[]{
        const passingGrades = this.grades.filter((grade) => {
            return grade >= this.passing
        })
        console.log(passingGrades);
        return passingGrades;
        
    }
}

