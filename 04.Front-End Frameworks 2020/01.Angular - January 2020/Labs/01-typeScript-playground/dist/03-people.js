"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    work() {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask || ''); //Why I should do this?
        console.log(this.name + currentTask);
    }
    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
        return this.salary;
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}
exports.Junior = Junior;
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}
exports.Senior = Senior;
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting.');
    }
    getSalary() {
        return this.salary + this.divident;
    }
}
exports.Manager = Manager;
//Tests
let junior = new Junior('Pesho', 18);
junior.work();
junior.work();
junior.salary = 1000;
junior.collectSalary();
console.log(junior.getSalary());
console.log('---------------------------');
let senior = new Senior('Gosho', 20);
senior.work();
senior.work();
senior.work();
senior.work();
senior.salary = 2000;
senior.collectSalary();
console.log(senior.getSalary());
console.log('---------------------------');
let manager = new Manager('Stamat', 22);
manager.work();
manager.work();
manager.work();
manager.salary = 3000;
manager.collectSalary();
console.log(manager.getSalary());
manager.divident = 1000;
manager.collectSalary();
console.log(manager.getSalary());
//# sourceMappingURL=03-people.js.map