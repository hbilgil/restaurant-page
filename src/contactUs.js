import addressImage from './images/address.png';
import watchImage from './images/watch.png';
import phoneImage from './images/phone.png';
import letterImage from './images/letter.png';

function loadContactUsPage() {

    const main = document.getElementById('main');
    main.textContent = '';

    const contactUsPageDiv = document.createElement('div');
    contactUsPageDiv.classList.add('contact-container');

    const contactUsPageHeader = document.createElement('h1');
    contactUsPageDiv.appendChild(contactUsPageHeader);
    contactUsPageHeader.textContent = "Contact Us";

    const contactUsPageContainer = document.createElement('div');
    contactUsPageContainer.classList.add('contact-content');
    contactUsPageDiv.appendChild(contactUsPageContainer);

    const contactUsInfoContainer = document.createElement('div');
    contactUsInfoContainer.classList.add('info');
    contactUsPageContainer.appendChild(contactUsInfoContainer);

    const contactUsAddressInfo = document.createElement('div');
    contactUsAddressInfo.classList.add('address');
    contactUsInfoContainer.appendChild(contactUsAddressInfo);

    const addressInfoImage = new Image();
    addressInfoImage.src = addressImage;
    contactUsAddressInfo.appendChild(addressInfoImage);

    const addressInfoPara = document.createElement('p');
    contactUsAddressInfo.appendChild(addressInfoPara);
    addressInfoPara.textContent = 'Uluonder Mh. Ismet Inonu 2 Cd. No: 47/16 Tepebasi / ESKISEHIR';

    const contactUsHoursInfo = document.createElement('div');
    contactUsHoursInfo.classList.add('hours');
    contactUsInfoContainer.appendChild(contactUsHoursInfo);

    const hoursInfoImage = new Image();
    hoursInfoImage.src = watchImage;
    contactUsAddressInfo.appendChild(hoursInfoImage);

    const hoursInfoPara = document.createElement('p');
    contactUsAddressInfo.appendChild(hoursInfoPara);
    hoursInfoPara.textContent = 'Mon-Saturday: 8 am to 8 pm';

    const contactUsPhoneInfo = document.createElement('div');
    contactUsPhoneInfo.classList.add('phone');
    contactUsInfoContainer.appendChild(contactUsPhoneInfo);

    const phoneInfoImage = new Image();
    phoneInfoImage.src = phoneImage;
    contactUsAddressInfo.appendChild(phoneInfoImage);

    const phoneInfoPara = document.createElement('p');
    contactUsAddressInfo.appendChild(phoneInfoPara);
    phoneInfoPara.textContent = '(0222) 888 88 88';

    const contactUsContactFormDiv = document.createElement('div');
    contactUsContactFormDiv.classList.add('contact-form');
    contactUsInfoContainer.appendChild(contactUsContactFormDiv);

    const contactUsContactForm = document.createElement('form');
    const attributesForContactForm = {
       onsubmit: 'return false',
    };
    setAttributes(contactUsContactForm, attributesForContactForm);
    contactUsContactFormDiv.appendChild(contactUsContactForm);

    const contactFormImage = new Image();
    contactFormImage.src = letterImage;
    contactUsContactForm.appendChild(contactFormImage);

    const contactFormHeading = document.createElement('h3');
    contactUsContactForm.appendChild(contactFormHeading);
    contactFormHeading.textContent = 'Message Us';

    const contactFormNameInput = document.createElement('div');
    contactFormNameInput.classList.add('input-box');
    contactUsContactForm.appendChild(contactFormNameInput);

    const contactFormNameInputText = document.createElement('input');
    const attributesForNameInputText = {
        type: 'text',
        placeholder: 'Full Name',
        required:''
    };
    setAttributes(contactFormNameInputText, attributesForNameInputText);
    contactFormNameInput.appendChild(contactFormNameInputText);

    const contactFormEmailInput = document.createElement('div');
    contactFormEmailInput.classList.add('input-box');
    contactUsContactForm.appendChild(contactFormEmailInput);

    const contactFormEmailInputText = document.createElement('input');
    const attributesForEmailInputText = {
        type: 'email',
        placeholder: 'E-mail',
        required:''
    };
    setAttributes(contactFormEmailInputText, attributesForEmailInputText);
    contactFormEmailInput.appendChild(contactFormEmailInputText);

    const contactFormMessageInput = document.createElement('div');
    contactFormMessageInput.classList.add('input-box');
    contactUsContactForm.appendChild(contactFormMessageInput);

    const contactFormMessageInputText = document.createElement('textarea');
    const attributesForMessageInputText = {
        placeholder: 'Type your message',
        required:''
    };
    setAttributes(contactFormMessageInputText, attributesForMessageInputText);
    contactFormMessageInput.appendChild(contactFormMessageInputText);

    const submitBtn = document.createElement('input');
    const attributesForSubmitBtn = {
        type: 'Submit',
        value: 'Send'
    };
    setAttributes(submitBtn, attributesForSubmitBtn);
    contactUsContactForm.appendChild(submitBtn);

    const contactUsMapContainer = document.createElement('div');
    contactUsMapContainer.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Uluonder Mh. İsmet İnönü 2 Cd. No: 47/16&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">FNF Mods</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>'
    contactUsPageDiv.appendChild(contactUsMapContainer);
    
    main.appendChild(contactUsPageDiv);

    return contactUsPageDiv;

}

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

export default loadContactUsPage;