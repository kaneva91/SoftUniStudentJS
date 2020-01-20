"use strict";
class KeyValuePair {
    constructor() {
    }
    setKeyValue(key, value) {
        this._key = key;
        this._value = value;
    }
    display() {
        console.log(`key = ${this._key}, value = ${this._value}`);
    }
}
let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
//# sourceMappingURL=06-key-value-pairs.js.map