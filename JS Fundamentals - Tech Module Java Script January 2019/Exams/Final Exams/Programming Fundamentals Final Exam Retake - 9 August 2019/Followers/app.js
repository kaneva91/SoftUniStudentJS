function solve(arr) {
    let followers = {};
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'Log out') {
            break;
        }

        let [command, ...rest] = arr[i].split(': ');

        if (command === 'New follower') {
            let username = rest[0];

            if (!followers.hasOwnProperty(username)) {
                followers[username] = { 'likes': 0, 'comments': 0 };
            }
        }

        else if (command === 'Like') {
            let [username, likes] = rest;

            if (followers.hasOwnProperty(username)) {
                followers[username]['likes'] += Number(likes);
            }
            else {
                followers[username] = { 'likes': likes, 'comments': 0 };
            }
        }

        else if (command === 'Comment') {
            let username = rest[0];
            if (followers.hasOwnProperty(username)) {
                followers[username]['comments'] += 1;
            }
            else {
                followers[username] = { 'likes': 0, 'comments': 1 };
            }
        }

        else if (command === 'Blocked') {
            let username = rest[0];

            if (followers.hasOwnProperty(username)) {
                delete followers[username]
            }
            else {
                console.log(`${username} doesn't exist.`);
            }
        }
    }
    let folowersCount = 0;
    followersSumLikesAndComments = [];

    Object.entries(followers)
        .map(x => {
            let sum = x[1].likes + x[1].comments;
            folowersCount++;
            followersSumLikesAndComments.push([x[0], sum])
        })
        console.log(`${folowersCount} followers`);
     followers = Object.entries(followers)
    .sort((a,b) => byLikes(a[1],b[1]) || byName(a[0],b[0]))
    .reverse()
    .forEach(x => console.log(`${x[0]}: ${Number(x[1].comments) + Number(x[1].likes)}`))
    //console.log(followers); 
    
    function byLikes(a,b){
        if(a.likes > b.likes){
            return 1
        }
        else if(a.likes < b.likes){
            return -1
        }
        else{
            return 0;
        }
    }

    function byName(a,b){
        if(a< b) { return 1; }
        if(a> b) { return -1; }
        return 0;
    }
  
}


solve(['New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'])