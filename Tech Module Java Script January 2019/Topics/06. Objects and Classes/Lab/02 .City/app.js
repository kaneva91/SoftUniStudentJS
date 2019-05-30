function solve(name, area, population, country, postCode) {
    let city = {};
    city.name = name;
    city.area = area;
    city.population = population;
    city.country = country;
    city.postCode = postCode;

    let entries = Object.entries(city);
    for (const [object, value] of entries) {
        console.log(`${object} -> ${value}`);
    }
}

solve("Sofia", " 492", "1238438", "Bulgaria", "1000");