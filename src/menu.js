import activeImage from './images/activeFood.jpeg';
import No2Image from './images/No2Food.jpeg';
import No3Image from './images/No3Food.jpeg';
import No4Image from './images/No4Food.jpeg';

function loadMenuPage() {

    const main = document.getElementById('main');
    main.textContent = '';

    const menuPageDiv = document.createElement('div');
    const attributesForMenuPageDiv = {
        id: 'carouselExampleIndicators',
        class: 'carousel slide',
        'data-ride': 'carousel'
    };
    setAttributes(menuPageDiv, attributesForMenuPageDiv);

    const carouselList = document.createElement('ol');
    carouselList.classList.add('carousel-indicators');
    menuPageDiv.appendChild(carouselList);

    const carouselListItemNo1 = document.createElement('li');
    const attributesForListItemNo1 = {
        'data-target': '#carouselExampleIndicators',
        'data-slide-to': '0',
        class: 'active'
    };
    setAttributes(carouselListItemNo1, attributesForListItemNo1);
    carouselList.appendChild(carouselListItemNo1);

    const carouselListItemNo2 = document.createElement('li');
    const attributesForListItemNo2 = {
        'data-target': '#carouselExampleIndicators',
        'data-slide-to': '1'
    };
    setAttributes(carouselListItemNo2, attributesForListItemNo2);
    carouselList.appendChild(carouselListItemNo2);

    const carouselListItemNo3 = document.createElement('li');
    const attributesForListItemNo3 = {
        'data-target': '#carouselExampleIndicators',
        'data-slide-to': '2'
    };
    setAttributes(carouselListItemNo3, attributesForListItemNo3);
    carouselList.appendChild(carouselListItemNo3);

    const carouselListItemNo4 = document.createElement('li');
    const attributesForListItemNo4 = {
        'data-target': '#carouselExampleIndicators',
        'data-slide-to': '3'
    };
    setAttributes(carouselListItemNo4, attributesForListItemNo4);
    carouselList.appendChild(carouselListItemNo4);

    const carouselInnerDiv = document.createElement('div');
    carouselInnerDiv.classList.add('carousel-inner');
    menuPageDiv.appendChild(carouselInnerDiv);

    const activeItemInnerDiv = document.createElement('div');
    activeItemInnerDiv.classList.add('carousel-item', 'active');
    carouselInnerDiv.appendChild(activeItemInnerDiv);

    const activeItemImage = new Image();
    activeItemImage.src = activeImage;
    const attributesForActiveItemImage = {
        class: 'd-block w-100',
        alt: 'First slide'
    };
    setAttributes(activeItemImage, attributesForActiveItemImage);
    activeItemInnerDiv.appendChild(activeItemImage);

    const activeItemCaptionDiv = document.createElement('div');
    activeItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    activeItemInnerDiv.appendChild(activeItemCaptionDiv);

    const activeItemHeading = document.createElement('h5');
    activeItemCaptionDiv.appendChild(activeItemHeading);

    const activeItemPara = document.createElement('p');
    activeItemCaptionDiv.appendChild(activeItemPara);

    const No2ItemInnerDiv = document.createElement('div');
    No2ItemInnerDiv.classList.add('carousel-item');
    carouselInnerDiv.appendChild(No2ItemInnerDiv);

    const No2ItemImage = new Image();
    No2ItemImage.src = No2Image;
    const attributesForNo2ItemImage = {
        class: 'd-block w-100',
        alt: 'Second slide'
    };
    setAttributes(No2ItemImage, attributesForNo2ItemImage);
    No2ItemInnerDiv.appendChild(No2ItemImage);

    const No2ItemCaptionDiv = document.createElement('div');
    No2ItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    No2ItemInnerDiv.appendChild(No2ItemCaptionDiv);

    const No2ItemHeading = document.createElement('h5');
    No2ItemCaptionDiv.appendChild(No2ItemHeading);

    const No2ItemPara = document.createElement('p');
    No2ItemCaptionDiv.appendChild(No2ItemPara);

    const No3ItemInnerDiv = document.createElement('div');
    No3ItemInnerDiv.classList.add('carousel-item');
    carouselInnerDiv.appendChild(No3ItemInnerDiv);

    const No3ItemImage = new Image();
    No3ItemImage.src = No3Image;
    const attributesForNo3ItemImage = {
        class: 'd-block w-100',
        alt: 'Third slide'
    };
    setAttributes(No3ItemImage, attributesForNo3ItemImage);
    No3ItemInnerDiv.appendChild(No3ItemImage);

    const No3ItemCaptionDiv = document.createElement('div');
    No3ItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    No3ItemInnerDiv.appendChild(No3ItemCaptionDiv);

    const No3ItemHeading = document.createElement('h5');
    No3ItemCaptionDiv.appendChild(No3ItemHeading);

    const No3ItemPara = document.createElement('p');
    No3ItemCaptionDiv.appendChild(No3ItemPara);

    const No4ItemInnerDiv = document.createElement('div');
    No4ItemInnerDiv.classList.add('carousel-item');
    carouselInnerDiv.appendChild(No4ItemInnerDiv);

    const No4ItemImage = new Image();
    No4ItemImage.src = No4Image;
    const attributesForNo4ItemImage = {
        class: 'd-block w-100',
        alt: 'Fourth slide'
    };
    setAttributes(No4ItemImage, attributesForNo4ItemImage);
    No4ItemInnerDiv.appendChild(No4ItemImage);

    const No4ItemCaptionDiv = document.createElement('div');
    No4ItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    No4ItemInnerDiv.appendChild(No4ItemCaptionDiv);

    const No4ItemHeading = document.createElement('h5');
    No4ItemCaptionDiv.appendChild(No4ItemHeading);

    const No4ItemPara = document.createElement('p');
    No4ItemCaptionDiv.appendChild(No4ItemPara);

    const carouselPrevController = document.createElement('a');
    const attributesForPrevController = {
        class: 'carousel-control-prev',
        href: '#carouselExampleIndicators',
        role: 'button',
        'data-slide': 'prev'
    };
    setAttributes(carouselPrevController, attributesForPrevController);
    menuPageDiv.appendChild(carouselPrevController);

    const prevControllerIcon = document.createElement('span');
    const attributesForPrevControllerIcon = {
        class: 'carousel-control-prev-icon',
        'aria-hidden': 'true'
    };
    setAttributes(prevControllerIcon, attributesForPrevControllerIcon);
    carouselPrevController.appendChild(prevControllerIcon);

    const prevControllerText = document.createElement('span');
    prevControllerText.classList.add('sr-only');
    prevControllerText.textContent = 'Previous';
    carouselPrevController.appendChild(prevControllerText);

    const carouselNextController = document.createElement('a');
    const attributesForNextController = {
        class: 'carousel-control-next',
        href: '#carouselExampleIndicators',
        role: 'button',
        'data-slide': 'next'
    };
    setAttributes(carouselNextController, attributesForNextController);
    menuPageDiv.appendChild(carouselNextController);

    const nextControllerIcon = document.createElement('span');
    const attributesForNextControllerIcon = {
        class: 'carousel-control-next-icon',
        'aria-hidden': 'true'
    };
    setAttributes(nextControllerIcon, attributesForNextControllerIcon);
    carouselNextController.appendChild(nextControllerIcon);

    const nextControllerText = document.createElement('span');
    nextControllerText.classList.add('sr-only');
    nextControllerText.textContent = 'Next';
    carouselNextController.appendChild(nextControllerText);

    main.appendChild(menuPageDiv);

    return menuPageDiv;

}



function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

export default loadMenuPage;