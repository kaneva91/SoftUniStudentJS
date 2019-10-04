let  solution = (function () {
    return {
        add: function (vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        },
        multiply: function (vec, scalar) {
            return [vec[0] * scalar, vec[1] * scalar];
        },
        length: function (vec) {
            return  Math.sqrt(vec[0] ** 2 + vec[1] ** 2);;
        },
        dot: function (vec1, vec2) {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];;
        },
        cross: function (vec1, vec2) {
            return vec1[0] * vec2[1] - vec2[0] * vec1[1];;
        }
    }
})();

console.log(solution.add([1, 1], [0, 1]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
