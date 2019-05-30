function solve(input) {
    let i,
        batch,
        quality = 0,
        avgQuality = 0,
        maxQuality = 0,
        maxAvgQuality = 0,
        bestBatch = [0];
    for (i = 0; i < input.length; i += 1) {
        if (input[i] === 'Bake It!') {
            break;
        }
        else {
            batch = input[i].split('#').map(x => Number(x));
            quality = batch.reduce((a, b) => a + b);
            avgQuality = quality / batch.length;
            
            if (quality > maxQuality) {
                maxQuality = quality;
                maxAvgQuality = avgQuality;
                bestBatch = batch.slice();
            }
            else if (quality == maxQuality) {
                if(avgQuality > maxAvgQuality){
                    maxAvgQuality = avgQuality;
                    bestBatch = batch.slice();
                }
            }

        }
    }
    console.log(`Best Batch quality: ${maxQuality}`);
    console.log(` ${bestBatch.join(' ')}`);
}

solve(['Bake It!','5#4#10#-2', '10#5#2#3#2', 'Bake It!']);
solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']);