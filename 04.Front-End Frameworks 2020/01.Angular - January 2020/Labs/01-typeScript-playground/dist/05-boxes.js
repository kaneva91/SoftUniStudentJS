"use strict";
class Box {
    constructor() {
        this._boxes = [];
    }
    add(data) {
        this._boxes.push(data);
    }
    remove() {
        this._boxes.shift();
    }
    get count() {
        return this._boxes.length;
    }
}
let box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
let box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
//# sourceMappingURL=05-boxes.js.map