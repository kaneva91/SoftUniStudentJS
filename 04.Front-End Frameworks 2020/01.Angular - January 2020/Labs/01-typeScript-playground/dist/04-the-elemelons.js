"use strict";
class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = this.setElement();
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`;
    }
    setElement() {
        const currElement = this.elements.shift();
        this.elements.push(currElement || '');
        return currElement || '';
    }
}
class Watermelon extends Melon {
    constructor(weight, melonsort) {
        super(weight, melonsort);
    }
}
class Firemelon extends Melon {
    constructor(weight, melonsort) {
        super(weight, melonsort);
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonsort) {
        super(weight, melonsort);
    }
}
Melon.prototype.elements = ['Water', 'Fire', 'Earth', 'Air'];
class Airmelon extends Melon {
    constructor(weight, melonsort) {
        super(weight, melonsort);
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonsort) {
        super(weight, melonsort);
        this.element = '';
        //console.log(super.melonSort)
    }
    morph() {
        this.element = this.setElement();
    }
}
//Tests
let watermelon = new Watermelon(1, 'sort1');
console.log('Watermelon class:');
console.log(watermelon.toString());
let firemelon = new Firemelon(2, 'sort2');
console.log('Fitemalon class:');
console.log(firemelon.toString());
let earthmelon = new Earthmelon(3, 'sort3');
console.log('Earthmelon class:');
console.log(earthmelon.toString());
let airmelon = new Airmelon(4, 'sort4');
console.log('Airmelon class:');
console.log(airmelon.toString());
let melolemonmelon = new Melolemonmelon(5, 'sort5');
console.log('Melolemonmelon class:');
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
//# sourceMappingURL=04-the-elemelons.js.map