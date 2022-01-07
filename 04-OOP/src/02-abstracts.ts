abstract class Department {
    static fiscalYear = 2022;
    protected employees: string[] = [];
    // name: string;

    constructor(public name: string, protected readonly id:string) {
        // this.name = name
    }
    // every child class must have a describe method 
    abstract describe(): void;

    addEmployee(employee: string){
        this.employees.push(employee)
    }


    printEmployeeInfo(){
        console.log(this.id);
        console.log(this.employees.length + "employees");
        console.log(...this.employees);
        
        
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super("IT", id);
    }

    describe(): void {
        console.log(`IT Department - ID ${this.id}`);
        
    }

setAdmin(name: string){
    this.admins.push(name)
}

getAdmin(): string[]{
    console.log(this.admins);
    return this.admins;
    
}

}

const IT = new ITDepartment("D2", ["Jimmy"]);
IT.addEmployee("Timmy")
IT.addEmployee("Jammy");

IT.printEmployeeInfo();

const IT2 = new ITDepartment("D3", ["Timmy"]);
IT2.addEmployee("Tammy")


IT2.printEmployeeInfo();

//! create your own class for accounting 
//! this class does not have abins and  instead  has daily net profits

class Accounting extends Department {
    constructor(id:string, public netProfits: number[]) {
        super("Accounting", id);
    }
    describe(): void {
        console.log(`Accounting Department - ID ${this.id}`);
        
    }
    

    addProfits(report: number){
        this.netProfits.push(report)
    }
    
    getProfits(){
        console.log(...this.netProfits);
    }

    removeLastProfits(){
        this.netProfits.pop()
    }
}