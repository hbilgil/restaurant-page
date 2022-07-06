
//IMPORTING MODULES & METHODS

import Logo from './images/logo.png'

//BODY ELEMENTS CREATION FUNCTIONS

/*----HEADER DIV CREATION FUNCTION----*/

function createHeader() {

    const header = document.createElement('header');
    header.classList.add('flex');

    header.appendChild(createHeaderLogoDiv());
    header.appendChild(createHeaderButtons());

    return header;

}

/*----Header Logo Div Creation Function----*/

function createHeaderLogoDiv() {

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo', 'flex');

    const logoImg = new Image();
    logoImg.src = Logo;
    logoDiv.appendChild(logoImg);

    const logoText = document.createElement('h1');
    logoText.textContent = 'Doyuran'

    logoDiv.appendChild(logoText);

    const logoTextSpan = document.createElement('span');
    logoText.appendChild(logoTextSpan);
    logoTextSpan.textContent = ' Restaurant'

    return logoDiv;

}