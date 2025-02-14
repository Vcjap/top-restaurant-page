class contact {
    constructor(){};
    create_page(){
        const content = document.getElementById('content');
        const heading = document.createElement('h1');
        heading.textContent = 'Contact Us';

        const paragraph = document.createElement('p');
        paragraph.textContent = 'Feel free to reach out to us at any time.';

        const email = document.createElement('p');
        email.textContent = 'Email: contact@toprestaurant.com';

        content.appendChild(heading);
        content.appendChild(paragraph);
        content.appendChild(email);
    };
}

export default new contact();