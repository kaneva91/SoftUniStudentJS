function formatter(func) {
    return function result(value) {
        return func(',', '$', true, value);
    }
}

let res = formatter(
    function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2, 2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    });

console.log(res(1));