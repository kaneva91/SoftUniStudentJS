function solve(input) {
    let result = [];

    input.forEach(element => {
        let [name, level, items] = element.split(' / ');
        level = Number(level)
        items = items.split(', ').sort();
        result.push({ name, level, items });
    });

    result.sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}
level => ${hero.level}
items => ${hero.items.join(', ')}`);
        })
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);