import activeImage from './images/activeFood.jpeg';
import No2Image from './images/No2Food.jpeg';

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


    main.appendChild(menuPageDiv);

    return menuPageDiv;

}



function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

export default loadMenuPage;