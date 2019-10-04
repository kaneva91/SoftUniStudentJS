function solve(radius, height){
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3; 
    let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * (Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

solve(3, 5);
solve(3.3, 7.8);