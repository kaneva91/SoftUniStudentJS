function solve(band, album, song){
    let durarion = band.length * album.length * (song.length / 2);
    console.log(`The plate was rotated ${Math.ceil(durarion /2.5)} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');