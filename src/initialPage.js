
//IMPORTING MODULES & METHODS

import loadHomePage from './home'; 
import loadAboutPage from './about';
import loadMenuPage from './menu';
import loadContactUsPage from './contactUs';
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

/*----MAIN DIV CREATION FUNCTION----*/

function createMainDiv() { //this function just creates a blank div as the content will be changed accordingly by importing contents from JS files
    
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-container');
    mainDiv.setAttribute('id', 'main');
    return mainDiv;

}

/*----FOOTER DIV CREATION FUNCTION----*/

function createFooter() {

    const footer = document.createElement('div');
    footer.classList.add("footer");
  
    const copyrightText = document.createElement('p');
    copyrightText.textContent = `Copyright © ${new Date().getFullYear()}`;
    footer.appendChild(copyrightText);
  
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/hbilgil';
    githubLink.setAttribute('target', '_blank');
    githubLink.textContent = ' Halil Bilgil'
    copyrightText.appendChild(githubLink);
  
    return footer;

}

//WEBPAGE ONLOAD FUNCTION (will be imported by index.js)

function initialPageLoader() { // a function to load all elements inside the body

    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    content.appendChild(createMainDiv());
    content.appendChild(createFooter());
    
    loadHomePage();
}
  
export default initialPageLoader;