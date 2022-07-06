import aboutImage from './images/owner.jpeg';

function loadAboutPage() {

    const main = document.getElementById('main');
    main.textContent = '';

    const aboutPageDiv = document.createElement('div');
    aboutPageDiv.classList.add('about-content');

    const aboutPageHeader = document.createElement('h1');
    aboutPageDiv.appendChild(aboutPageHeader);
    aboutPageHeader.textContent = "About Us";

    const aboutPageContent = document.createElement('div');
    aboutPageDiv.appendChild(aboutPageContent);

    const aboutPageText = document.createElement('p');
    aboutPageContent.appendChild(aboutPageText);
    aboutPageText.textContent = "This story started one day when my mother left us at home with my cousin." + 
                                " We were hungry; I made menemen, potato salad and rice. I was only 9 years old." + 
                                " Even though I was shy at first when my mother returned home, I was very pleased" + 
                                " with the way she appreciated me and liked my food. That dream has started since then." + 
                                " It's a dream that lasted 40 years. Even though the years passed in life abroad by working in different sectors," +
                                " my dream of cooking for people had never passed. So that I was always in the kitchen in family gatherings" +
                                " and in various environments and cooked with pleasure. That is, until my brother told me, sister," + 
                                " that you should do this professionally now. The story of the flavors were decided in December 2017 and" +
                                " on the 8th January of 2018, began. As the smells of food spread around in my kitchen, it didn't take long for" +
                                " my taste to be heard, as the customers informed the others. Thank you to everyone who supported me during this process." +
                                " We decided to open hearty delicacies at the end of the first year. I hope we will share many delicious flavors with you here." +
                                " Let's not forget that everyone is full with what they eat, but being full is another feeling."

    const aboutPageImage = new Image();
    aboutPageImage.src = aboutImage;
    aboutPageContent.appendChild(aboutPageImage);

    main.appendChild(aboutPageDiv);

    return aboutPageDiv;

}

export default loadAboutPage;