function solve(arr){
   let gifts = arr.shift().split(' ');
   
   for (i = 0; i < arr.length; i+= 1) {
        if(arr[i] === 'No Money'){
            break;
        }

        else{
            line = arr[i].split(' ');
            let comand = line[0];
            if(comand === 'OutOfStock'){
                let gift = line[1];

                for (j = 0; j < gifts.length; j+= 1) {
                    if(gifts[j] === gift){
                        gifts[j] = "None"
                    }
                }
            }

            else if(comand === 'Required'){
                let gift = line[1];
                let index = Number(line[2]);

                if(index >= 0 && index < gifts.length){
                    gifts[index] = gift;
                }
            }
            else if(comand === 'JustInCase'){
                let gift = line[1];
                gifts[gifts.length - 1] = gift;
            }

        }
   }
   console.log(gifts.filter(g => g != 'None').join(' '));
}

solve([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money' ]);
/* 
solve([ 'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
'Required Paper 8',
'OutOfStock Clothes',
'Required Chocolate 2',
'JustInCase Hat',
'OutOfStock Cable',
'No Money' ]) */