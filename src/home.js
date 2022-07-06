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

export default loadHomePage;