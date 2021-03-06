//IMPORTING IMAGES

import smallIcon from './images/eat.png';
import largeIcon from './images/chef.jpeg';

// HOMEPAGE CREATION FUNCTION

function loadHomePage() {

    const main = document.getElementById('main');
    main.textContent = '';

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('content', 'flex');

    homePageDiv.appendChild(createMainDivNo1());
    homePageDiv.appendChild(createMainDivNo2());
  
    main.appendChild(homePageDiv);
  
    return homePageDiv;

}

/*----Main Div No-1 Creation Function----*/

function createMainDivNo1() {

    const mainDivNo1 = document.createElement('div');
    mainDivNo1.classList.add('one');

    const mainDivNo1Header = document.createElement('h1');
    mainDivNo1.appendChild(mainDivNo1Header);
    mainDivNo1Header.textContent = "Eat, drink and live free. There's no telling what might happen tomorrow"

    const mainDivNo1HeaderImage = new Image();
    mainDivNo1HeaderImage.src = smallIcon;
    mainDivNo1Header.appendChild(mainDivNo1HeaderImage);

    const mainDivNo1Text = document.createElement('p');
    mainDivNo1.appendChild(mainDivNo1Text);
    mainDivNo1Text.textContent = "Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!"

    return mainDivNo1;

}

/*----Main Div No-2 Creation Function----*/

function createMainDivNo2() {

    const mainDivNo2 = document.createElement('div');
    mainDivNo2.classList.add('two');

    const mainDivNo2Img = new Image();
    mainDivNo2Img.src = largeIcon;
    mainDivNo2.appendChild(mainDivNo2Img);

    return mainDivNo2;
    
}

export default loadHomePage;