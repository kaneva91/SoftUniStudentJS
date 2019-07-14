function solution(command) {
    let totalScore = this.upvotes - this.downvotes,
        totalVotes = this.upvotes + this.downvotes,
        result = [];

    if (command === 'upvote') {
        this.upvotes++;
    }
    else if (command == 'downvote') {
        this.downvotes--;
    }
    else if (command === 'score') {
     

        if (totalVotes > 50) {
            let added = Math.ceil(Math.max(this.upvotes, Math.abs(this.downvotes)) * 0.25);
            result.push(this.upvotes + added);
            result.push(Math.abs(this.downvotes) + added);
        }
        else {
            result.push(this.upvotes);
            result.push(Math.abs(this.downvotes));
        }

        result.push(totalScore);
    }

    result.push(getRating());


    function getRating() {

        if (totalVotes < 10) {
            return 'new'
        }
        if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {
            return 'hot'
        } else if (
            totalScore >= 0 &&
            (this.upvotes > 100 || this.downvotes > 100)
        ) {
            return 'controversial'
        } else if (this.upvotes < this.downvotes) {
            return 'unpopular'
        } else {
            return 'new'
        }

    }

    return result;


}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');      // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
