import activeImage from './images/activeFood.jpeg';
import No2Image from './images/No2Food.jpeg';
import No3Image from './images/No3Food.jpeg';

import 'bootstrap/js/dist/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function loadServicesPage() {

    const main = document.getElementById('main');
    main.textContent = ''

    const menuPageDiv1 = document.createElement('div');
    const attributesForMenuPageDiv1 = {
        id: 'carouselExampleDark',
        class: 'carousel carousel-dark slide',
        'data-bs-ride': 'carousel'
    };
    setAttributes(menuPageDiv1, attributesForMenuPageDiv1);
    main.appendChild(menuPageDiv1);

    const carouselList = document.createElement('div');
    carouselList.classList.add('carousel-indicators');
    menuPageDiv1.appendChild(carouselList);

    const carouselListItemNo1 = document.createElement('button');
    const attributesForListItemNo1 = {
        type: 'button',
        'data-bs-target': '#carouselExampleDark',
        'data-bs-slide-to': '0',
        class: 'active',
        'aria-current': 'true',
        'aria-label': 'Slide 1'
    };
    setAttributes(carouselListItemNo1, attributesForListItemNo1);
    carouselList.appendChild(carouselListItemNo1);

    const carouselListItemNo2 = document.createElement('button');
    const attributesForListItemNo2 = {
        type: 'button',
        'data-bs-target': '#carouselExampleDark',
        'data-bs-slide-to': '1',
        'aria-label': 'Slide 2'
    };
    setAttributes(carouselListItemNo2, attributesForListItemNo2);
    carouselList.appendChild(carouselListItemNo2);

    const carouselListItemNo3 = document.createElement('button');
    const attributesForListItemNo3 = {
        type: 'button',
        'data-bs-target': '#carouselExampleDark',
        'data-bs-slide-to': '2',
        'aria-label': 'Slide 3'
    };
    setAttributes(carouselListItemNo3, attributesForListItemNo3);
    carouselList.appendChild(carouselListItemNo3);

    const carouselInnerDiv = document.createElement('div');
    carouselInnerDiv.classList.add('carousel-inner');
    menuPageDiv1.appendChild(carouselInnerDiv);

    const activeItemInnerDiv = document.createElement('div');
    const attributesForActiveItemInnerDiv = {
        class: 'carousel-item active',
        'data-bs-interval': '10000'
    };
    setAttributes(activeItemInnerDiv, attributesForActiveItemInnerDiv);
    carouselInnerDiv.appendChild(activeItemInnerDiv);

    const activeItemImage = new Image();
    activeItemImage.src = activeImage;
    const attributesForActiveItemImage = {
        class: 'd-block w-100',
        alt: '...',
    };
    setAttributes(activeItemImage, attributesForActiveItemImage);
    activeItemInnerDiv.appendChild(activeItemImage);

    const activeItemCaptionDiv = document.createElement('div');
    activeItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    activeItemInnerDiv.appendChild(activeItemCaptionDiv);

    const activeItemHeading = document.createElement('h5');
    activeItemCaptionDiv.appendChild(activeItemHeading);
    activeItemHeading.textContent = 'Invitations, Party & Meetings';

    const activeItemPara = document.createElement('p');
    activeItemCaptionDiv.appendChild(activeItemPara);
    activeItemPara.textContent = 'We are capable of catering for all your events';

    const No2ItemInnerDiv = document.createElement('div');

    const attributesForNo2ItemInnerDiv = {
        class: 'carousel-item',
        'data-bs-interval': '10000'
    };
    setAttributes(No2ItemInnerDiv, attributesForNo2ItemInnerDiv);
    carouselInnerDiv.appendChild(No2ItemInnerDiv);

    const No2ItemImage = new Image();
    No2ItemImage.src = No2Image;
    const attributesForNo2ItemImage = {
        class: 'd-block w-100',
        alt: '...'
    };
    setAttributes(No2ItemImage, attributesForNo2ItemImage);
    No2ItemInnerDiv.appendChild(No2ItemImage);

    const No2ItemCaptionDiv = document.createElement('div');
    No2ItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    No2ItemInnerDiv.appendChild(No2ItemCaptionDiv);
    

    const No2ItemHeading = document.createElement('h5');
    No2ItemCaptionDiv.appendChild(No2ItemHeading);
    No2ItemHeading.textContent = 'Weddings, Funeral & Collective Events';

    const No2ItemPara = document.createElement('p');
    No2ItemCaptionDiv.appendChild(No2ItemPara);
    No2ItemPara.textContent = 'Feel free to contact us if you want to serve for large groups of participants';

    const No3ItemInnerDiv = document.createElement('div');
    No3ItemInnerDiv.classList.add('carousel-item');
    carouselInnerDiv.appendChild(No3ItemInnerDiv);

    const No3ItemImage = new Image();
    No3ItemImage.src = No3Image;
    const attributesForNo3ItemImage = {
        class: 'd-block w-100',
        alt: '...'
    };
    setAttributes(No3ItemImage, attributesForNo3ItemImage);
    No3ItemInnerDiv.appendChild(No3ItemImage);

    const No3ItemCaptionDiv = document.createElement('div');
    No3ItemCaptionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');
    No3ItemInnerDiv.appendChild(No3ItemCaptionDiv);

    const No3ItemHeading = document.createElement('h5');
    No3ItemCaptionDiv.appendChild(No3ItemHeading);
    No3ItemHeading.textContent = 'Table Ditch Option for Businesses';

    const No3ItemPara = document.createElement('p');
    No3ItemCaptionDiv.appendChild(No3ItemPara);
    No3ItemPara.textContent = 'We have numerous equipments to provide meal with table ditch to businesses and events';

    const carouselPrevController = document.createElement('button');
    const attributesForPrevController = {
        class: 'carousel-control-prev',
        type: 'button',
        'data-bs-target': '#carouselExampleDark',
        'data-bs-slide': 'prev'
    };
    setAttributes(carouselPrevController, attributesForPrevController);
    menuPageDiv1.appendChild(carouselPrevController);

    const prevControllerIcon = document.createElement('span');
    const attributesForPrevControllerIcon = {
        class: 'carousel-control-prev-icon',
        'aria-hidden': 'true'
    };
    setAttributes(prevControllerIcon, attributesForPrevControllerIcon);
    carouselPrevController.appendChild(prevControllerIcon);

    const prevControllerText = document.createElement('span');
    prevControllerText.classList.add('visually-hidden');
    prevControllerText.textContent = 'Previous';
    carouselPrevController.appendChild(prevControllerText);

    const carouselNextController = document.createElement('button');
    const attributesForNextController = {
        class: 'carousel-control-next',
        type: 'button',
        'data-bs-target': '#carouselExampleDark',
        'data-bs-slide': 'next'
    };
    setAttributes(carouselNextController, attributesForNextController);
    menuPageDiv1.appendChild(carouselNextController);

    const nextControllerIcon = document.createElement('span');
    const attributesForNextControllerIcon = {
        class: 'carousel-control-next-icon',
        'aria-hidden': 'true'
    };
    setAttributes(nextControllerIcon, attributesForNextControllerIcon);
    carouselNextController.appendChild(nextControllerIcon);

    const nextControllerText = document.createElement('span');
    nextControllerText.classList.add('visually-hidden');
    nextControllerText.textContent = 'Next';
    carouselNextController.appendChild(nextControllerText);

    return menuPageDiv1;
}

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

export default loadServicesPage;