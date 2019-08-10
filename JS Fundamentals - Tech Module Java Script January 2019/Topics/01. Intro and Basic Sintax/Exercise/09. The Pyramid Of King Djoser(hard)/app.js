function solve(base, increment){
    let stone = 0,
        marble = 0,
        lapis = 0,
        gold = 0,
        heigth = 0,
        counter = 0,
        layer = 0,
        innerLayer = 0,
        outerLayer = 0;

    while (true) {
        counter += 1;
        heigth += 1;
        if(base === 1 || base === 2){
            gold = (Math.pow(base, 2)) * increment;
            break;
        }

        layer = Math.pow(base, 2);
        innerLayer= Math.pow((base - 2), 2);
        outerLayer = layer - innerLayer;

        stone += innerLayer * increment;

        if(counter === 5){
        lapis += outerLayer * increment;
        counter = 0;
        }
        else{
            marble += outerLayer * increment;
        }        
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}
Marble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapis)}
Gold required: ${Math.ceil(gold)}
Final pyramid height: ${Math.floor(heigth * increment)}`);
}

solve(11, 1);