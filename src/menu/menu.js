function menuLoad() {
    const cards_name = [
        {   
            name: "Rice",
            description: "Both white and brown rice served with chicken stew."
        },
        {
            name: "Easy Chocolate Fudge Cake",
            description: "White and brown chocolate."
        }
    ];

    const content = document.querySelector('.content');
    const main = document.createElement('div');
    main.classList.add('menu');
    for (let i = 0; i < cards_name.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let name = document.createElement('p');
        let info = document.createElement('p');
        name.textContent = cards_name[i].name;
        info.textContent = cards_name[i].description;
        card.append(name);
        card.append(info);
        main.append(card);
    }
    content.append(main);
}

export default menuLoad;
