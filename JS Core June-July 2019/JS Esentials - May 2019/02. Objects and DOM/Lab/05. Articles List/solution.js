function createArticle() {

	let title = document.getElementById('createTitle'),
		text = document.getElementById('createContent');

	if (title.value !== '' && text.value !== '') {

		let articleHeading = document.getElementById("articles"),

			h3 = document.createElement('h3'),
			par = document.createElement('p'),
			article = document.createElement('article');

		h3.textContent = title.value;
		par.textContent = text.value;

		article.appendChild(h3);
		article.appendChild(par);

		articleHeading.appendChild(article);

		title.value = '';
		text.value = '';

	}
}