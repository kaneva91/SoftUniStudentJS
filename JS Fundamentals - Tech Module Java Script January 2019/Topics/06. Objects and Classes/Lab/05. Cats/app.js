function solve(arr) {
    let i, cats = [],
        catData,
        name,
        age;

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    cats = arr.map(el => el.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow());
}

solve(['Mellow 2', 'Tom 5']);