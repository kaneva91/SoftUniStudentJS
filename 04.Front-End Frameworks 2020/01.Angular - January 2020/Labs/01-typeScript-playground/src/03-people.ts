abstract class Employee{
    public salary : number = 0;
    public tasks : string[] = [];
    
    constructor(public name : string, public age: number){

    }

    public work() : void{
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask || ''); //Why I should do this?
        console.log(this.name + currentTask);
    }

    public collectSalary() : void{
           console.log(`${this.name} received ${this.getSalary()} this month.`) 
    }

    public getSalary() {
          return this.salary;  
    }
}

export class Junior extends Employee{
    constructor(name: string, age:number){
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}

export class Senior extends Employee{
    constructor(name: string, age:number){
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}

export class Manager extends Employee{
    public divident: number = 0;
    constructor(name: string, age:number){
        super(name, age);
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting.');
    }

    public getSalary(){
        return this.salary + this.divident;
    }
}

//Tests
let junior = new Junior('Pesho', 18);
junior.work();
junior.work();
junior.salary  = 1000;
junior.collectSalary();
console.log(junior.getSalary());
console.log('---------------------------');
let senior = new Senior('Gosho', 20);
senior.work();
senior.work();
senior.work();
senior.work();
senior.salary  = 2000;
senior.collectSalary();
console.log(senior.getSalary());
console.log('---------------------------');
let manager = new Manager('Stamat', 22);
manager.work();
manager.work();
manager.work();
manager.salary  = 3000;
manager.collectSalary();
console.log(manager.getSalary());
manager.divident = 1000;
manager.collectSalary();
console.log(manager.getSalary());