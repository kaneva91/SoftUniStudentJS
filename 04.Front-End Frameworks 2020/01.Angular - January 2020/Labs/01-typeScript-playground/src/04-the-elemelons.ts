abstract class Melon {
    elements!: string[];
    element: string = this.setElement();
    constructor(public weight: number, public melonSort: string) {
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`
    }

    setElement() {
        const currElement = this.elements.shift();
        this.elements.push(currElement || '')
        return currElement || '';
    }
}


class Watermelon extends Melon {
    constructor(weight: number, melonsort: string) {
        super(weight, melonsort);
    }
}
class Firemelon extends Melon {
    constructor(weight: number, melonsort: string) {
        super(weight, melonsort);
    }
}
class Earthmelon extends Melon {
    constructor(weight: number, melonsort: string) {
        super(weight, melonsort);
    }
}

Melon.prototype.elements = ['Water', 'Fire', 'Earth', 'Air'];

class Airmelon extends Melon {
    constructor(weight: number, melonsort: string) {
        super(weight, melonsort);
    }
}

class Melolemonmelon extends Watermelon {

    constructor(weight: number, melonsort: string) {
        super(weight, melonsort);
        this.element = ''
    }

    morph() {
        this.element = this.setElement();
    }
}


//Tests
let watermelon: Watermelon = new Watermelon(1, 'sort1');
console.log('Watermelon class:');
console.log(watermelon.toString());

let firemelon: Firemelon = new Firemelon(2, 'sort2');
console.log('Fitemalon class:');
console.log(firemelon.toString());

let earthmelon: Earthmelon = new Earthmelon(3, 'sort3');
console.log('Earthmelon class:');
console.log(earthmelon.toString());

let airmelon: Airmelon = new Airmelon(4, 'sort4');
console.log('Airmelon class:');
console.log(airmelon.toString());

let melolemonmelon: Melolemonmelon = new Melolemonmelon(5, 'sort5');
console.log('Melolemonmelon class:');
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());

