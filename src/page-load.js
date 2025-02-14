import restaurantImage from "./images/restaurant_stock.jpg";

class webPage {
    constructor(){};
    create_page() {
        const container = document.querySelector("div#content");
        const title = document.createElement("h1");
        title.textContent = "The best food money can buy";

        const heroImage = document.createElement("img");
        heroImage.src = restaurantImage;

        const welcomePar = document.createElement("p");
        welcomePar.textContent = ("Welcome to our restaurant! We offer a variety of delicious dishes made from the freshest ingredients. Come and enjoy a wonderful dining experience with us.");

        const highlightsSection = document.createElement('section');
        highlightsSection.id = 'highlights';

        const highlightsHeading = document.createElement('h2');
        highlightsHeading.textContent = 'Highlights';
        highlightsSection.appendChild(highlightsHeading);

        const highlightsList = document.createElement('ul');
        const highlightsItems = ['Fresh Ingredients', 'Cozy Atmosphere', 'Friendly Staff', 'Exquisite Dishes'];
        highlightsItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            highlightsList.appendChild(listItem);
        });
        highlightsSection.appendChild(highlightsList);

        const contactSection = document.createElement('section');
        contactSection.id = 'contact';

        const contactHeading = document.createElement('h2');
        contactHeading.textContent = 'Contact Us';
        contactSection.appendChild(contactHeading);

        const contactAddress = document.createElement('p');
        contactAddress.textContent = 'Address: 123 Food Street, Flavor Town';
        contactSection.appendChild(contactAddress);

        const contactPhone = document.createElement('p');
        contactPhone.textContent = 'Phone: (123) 456-7890';
        contactSection.appendChild(contactPhone);

        const contactEmail = document.createElement('p');
        contactEmail.textContent = 'Email: contact@restaurant.com';
        contactSection.appendChild(contactEmail);

        container.append(title, heroImage, welcomePar, highlightsSection, contactSection);
    }
};

export default new webPage;