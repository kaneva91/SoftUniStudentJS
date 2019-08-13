function getData() {
	let faceControl = {
		peopleIn: [],
		peopleOut: [],
		blacklist: []
	};

	let input = JSON.parse(document.querySelector('textarea').value);

	let sortCriteria = input.pop();

	const filterPerson = (curr, person) => {
		if (curr.firstName === person.firstName && curr.lastName === person.lastName) {
			return curr;
		}
	}

	const peopleIn = (person) => {
		delete person.action;

		let filtered = faceControl.blacklist.filter(x => filterPerson(x, person));

		if (filtered.length === 0) {
			faceControl.peopleIn.push(person);
		}
	}

	const peopleOut = (person) => {
		delete person.action;

		let filtered = faceControl.peopleIn.filter(x => filterPerson(x, person))

		if (filtered.length !== 0) {
			filtered = filtered[0];

			let index = faceControl.peopleIn.indexOf(filtered);

			let peopleInArray = faceControl.peopleIn;

			peopleInArray.splice(index, 1);

			faceControl.peopleIn = peopleInArray;

			faceControl.peopleOut.push(person);
		}
	}

	const blacklist = (person) => {
		delete person.action;

		let filtered = faceControl.peopleIn.filter(x => filterPerson(x, person));

		if (filtered.length !== 0) {
			peopleOut(person)
		}

		faceControl.blacklist.push(person);
	}

	//1.Check people
	for (i = 0; i < input.length; i += 1) {
		if (input[i].action === 'peopleIn') {
			peopleIn(input[i]);
		}
		else if (input[i].action === ('peopleOut')) {
			peopleOut(input[i]);
		}
		else {
			blacklist(input[i]);
		}
	}

	//2.Sort by given criteria
	if (sortCriteria.criteria !== '' && sortCriteria.action !== '') {
		let toBeSorted = faceControl[sortCriteria.action];

		toBeSorted.sort(function (a, b) {
			let nameA = a[sortCriteria.criteria].toLowerCase(),
				nameB = b[sortCriteria.criteria].toLowerCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		})
		faceControl[sortCriteria.action] = toBeSorted;
	}

	//3.Visualisation
	let inOutput = document.querySelector('#peopleIn'),
		blacklistOutput = document.querySelector('#blacklist'),
	outOutput = document.querySelector('#peopleOut');

	let peopleInTobedisplayed = faceControl.peopleIn
		.map(x => JSON.stringify(x));

	let blacklistToBeDisplayed = faceControl.blacklist
		.map(x => JSON.stringify(x));

	let peopleOutToBeDisplayed = faceControl.peopleOut
		.map(x => JSON.stringify(x));

	inOutput.querySelector('p').textContent = peopleInTobedisplayed.join(' ');
	blacklistOutput.querySelector('p').textContent = blacklistToBeDisplayed.join(' ');
	outOutput.querySelector('p').textContent = peopleOutToBeDisplayed.join(' ')

}
