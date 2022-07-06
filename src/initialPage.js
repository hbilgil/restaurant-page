
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

/*----Header Buttons Creation Function----*/

function createHeaderButtons() {

    const headerButtons = document.createElement('div');
    headerButtons.classList.add('flex');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.onclick = loadHomePage;

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    aboutButton.onclick = loadAboutPage;

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.onclick = loadMenuPage;

    const contactUsButton = document.createElement('button');
    contactUsButton.textContent = 'Contact Us';
    contactUsButton.onclick = loadContactUsPage;

    headerButtons.appendChild(homeButton);
    headerButtons.appendChild(aboutButton);
    headerButtons.appendChild(menuButton);
    headerButtons.appendChild(contactUsButton);

    return headerButtons;

}