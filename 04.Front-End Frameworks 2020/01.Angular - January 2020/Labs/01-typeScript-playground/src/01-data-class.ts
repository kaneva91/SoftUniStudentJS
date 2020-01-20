class RequestData {
    public response: string = 'undefined';
    public fulfilled: boolean = false;

    constructor(public method: string, public uri: string, public version: string, public message: string) {

    }

    public getData() {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled
        }  //{method, uri, version, message, response, fulfilled}  why not in TS??
    }
}

let myData = new RequestData('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.getData());