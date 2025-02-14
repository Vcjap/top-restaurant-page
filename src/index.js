import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

class page_links {

    container = document.getElementById("content");
    constructor (){};
    add_links(){
        const buttons = document.querySelectorAll("nav button");
        const buttonMenu = document.querySelector(".Menu");
        buttonMenu.addEventListener("click", () => {
            this.reset();
            menu.create_page();
        });

        const buttonHome = document.querySelector(".Home");
        buttonHome.addEventListener("click", () => {
            this.reset();
            home.create_page();
        });

        const buttonContact = document.querySelector(".Contact");
        buttonContact.addEventListener("click", () => {
            this.reset();
            contact.create_page();
        });
    };

    reset(){
        this.container.replaceChildren();
    }

};

const restaurant_links = new page_links();
restaurant_links.add_links();
home.create_page();
