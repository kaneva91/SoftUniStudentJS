"use strict";
class RequestData {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = 'undefined';
        this.fulfilled = false;
    }
    getData() {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled
        }; //{method, uri, version, message, response, fulfilled}  why not in TS??
    }
}
let myData = new RequestData('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.getData());
//# sourceMappingURL=01-data-class.js.map