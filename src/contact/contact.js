function contactLoad() {
    const content = document.querySelector('.content');
    const about = document.createElement('div');
    about.classList.add('about');

    const adress = document.createElement('div');
    const contact = document.createElement('div');

    const adressHeader = document.createElement('h2');
    const contactHeader = document.createElement('h2');

    adressHeader.textContent = "Adress";
    contactHeader.textContent = "Contact";

    const missionLi = document.createElement('li');
    missionLi.textContent = "At Sweet Scoop Ice Cream, our mission is to bring joy to every scoop.";

    const addressLi_1 = document.createElement('li');
    addressLi_1.textContent = "Scoops of Joy Ice Cream Shop";

    const addressLi_2 = document.createElement('li');
    addressLi_2.textContent = "1234 Sweet Treats Lane";

    const addressLi_3 = document.createElement('li');
    addressLi_3.textContent = "Flavorville, CA 90210."


    const contactLi_1 = document.createElement('li');
    contactLi_1.textContent = "Kiryu Sento: 5555-5444 ";

    const contactLi_2 = document.createElement('li');
    contactLi_2.textContent = "E-mail: scoopicecream@gmail.com";

    contact.append(contactHeader);
    adress.append(adressHeader);

    adress.append(addressLi_1);
    adress.append(addressLi_2);
    adress.append(addressLi_3);
    contact.append(contactLi_1);
    contact.append(contactLi_2);
    about.append(adress);
    about.append(contact);

    content.append(about);
}

export default contactLoad;