function solution() {
    let output = '';

    return {
        append: function (str) {
            output += str;
        },
        removeStart: function (count) {
            output = output.slice(count);
        },
        removeEnd: function (count) {
            output = output.slice(0, output.length - count);
        },

        print: function () {
            console.log(output);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secontZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

