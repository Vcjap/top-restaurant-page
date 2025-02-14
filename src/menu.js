
class menu {
    constructor(){};

    create_page(){
        const content = document.getElementById('content');

        const menuTitle = document.createElement('h1');
        menuTitle.textContent = 'Menu';

        const menuList = document.createElement('ul');

        const items = ['Pizza', 'Pasta', 'Salad'];
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            menuList.appendChild(listItem);
        });

        content.appendChild(menuTitle);
        content.appendChild(menuList);
    }
}

export default new menu;