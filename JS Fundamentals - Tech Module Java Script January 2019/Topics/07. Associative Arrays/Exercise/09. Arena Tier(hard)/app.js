function solve(input) {
    let tier = {};

    for (let line of input) {

        if (line.includes(' -> ')) {

            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (tier.hasOwnProperty(gladiator)) {

                let currTechniquesAndSkills = tier[gladiator];

                if (currTechniquesAndSkills.hasOwnProperty(technique)) {

                    let currSkill = currTechniquesAndSkills[technique];

                    if (currSkill < skill) {
                        currTechniquesAndSkills[technique] = skill;
                        tier[gladiator] = currTechniquesAndSkills;
                    }
                }

                else {
                    currTechniquesAndSkills[technique] = skill;
                    tier[gladiator] = currTechniquesAndSkills;
                }

            }

            else {
                let techniquesAndSkills = {};
                techniquesAndSkills[technique] = skill;
                tier[gladiator] = techniquesAndSkills;
            }
        }

        else if (line.includes(' vs ')) {
            let [firstGladiator, secondGladiator] = line.split(' vs ');

            if (tier.hasOwnProperty(firstGladiator) && tier.hasOwnProperty(secondGladiator)) {
                let first = Object.entries(tier[firstGladiator]);
                let second = tier[secondGladiator];
                let pointsFirst = 0;
                let pointsSecond = 0;

                for (let line of first) {
                    let technique = line[0],
                        skill = line[1];

                    if (second.hasOwnProperty(technique)) {
                        pointsFirst += skill;
                        pointsSecond += second[technique];
                    }
                }

                if (pointsFirst > pointsSecond) {
                    delete tier[secondGladiator];
                }
                
                else {
                    delete tier[firstGladiator];
                }
            }
        }

        else if (line === 'Ave Cesar') {
            let result = [...Object.entries(tier)];
            let sortedByPoins = {};

            for (let line of result) {
                let techniquesAndSkills = line[1];
                let points = techniquesAndSkills = [...Object.values(techniquesAndSkills)].reduce((a, b) => a + b);
                sortedByPoins[line[0]] = points;

            }
            sortedByPoins = [...Object.entries(sortedByPoins)].sort((a, b) => b[1] - a[1]);
            for (let pair of sortedByPoins) {
                let gladiator = pair[0];
                let skills = pair[1];

                console.log(`${gladiator}: ${skills} skills`);

                let techniquesAndSkills = tier[gladiator];
                console.log(techniquesAndSkills);
                for (let iterator of result) {

                }
            }
            //console.log(result);
        }
    }
    //console.log(tier);
}

// solve(['Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);