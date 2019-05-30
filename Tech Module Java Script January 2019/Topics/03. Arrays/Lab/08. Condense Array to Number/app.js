function solve(arr){
    let sum = 0,
        currsum = 0,
        temparr = [];
        if(arr.length === 1){
            console.log(arr[0]);
        }
        else{
            while(arr.length > 2){
                for(let i = 0; i < arr.length - 1; i += 1){
                    currsum = (arr[i] + arr[i + 1]);
                    sum += currsum;
                    temparr.push(currsum);
                }
                arr = temparr.slice();
                temparr.length = 0;
            }
            console.log(arr[0] + arr[1]);
        }
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);