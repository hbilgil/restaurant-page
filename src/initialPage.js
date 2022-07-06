
//BODY ELEMENTS CREATION FUNCTIONS

/*----HEADER DIV CREATION FUNCTION----*/

function createHeader() {

    const header = document.createElement('header');
    header.classList.add('flex');

    header.appendChild(createHeaderLogoDiv());
    header.appendChild(createHeaderButtons());

    return header;

}