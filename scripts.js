function changeMode() { //modifica o modo
	changeClasses();
	changeText();
}

function changeClasses() { //modifica as classes
	button.classList.toggle(darkModeClass); //coloca ou tira (toggle) o darkmode no button
	h1.classList.toggle(darkModeClass); //coloca ou tira (toggle) o darkmode no h1
	body.classList.toggle(darkModeClass); //coloca ou tira (toggle) o darkmode no body
	footer.classList.toggle(darkModeClass); //coloca ou tira (toggle) o darkmode no footer
}

function changeText() { //modifica os textos
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}
//relaciona com HTML - seleciona os elementos
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode); //observa o evento click