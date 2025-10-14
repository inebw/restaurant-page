export const about = function () {
    const container = document.createElement('div');
    container.classList.add('about', 'main-content');

    const items = document.createElement('div');
    items.classList.add('items');

    const item1 = document.createElement('div');
    item1.classList.add('menu-cat');
    const item1h2 = document.createElement('h2')
    item1h2.classList.add('menu-h2');
    item1h2.textContent = "Our Story: ";
    const item1p = document.createElement('p');
    item1p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vitae porro tempora iure excepturi fugiat, veritatis quaerat eaque accusantium autem quis, beatae ratione numquam animi. Sunt numquam soluta libero accusamus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eius, eaque rerum vero repellat reiciendis voluptatibus perspiciatis, esse possimus neque cum maiores earum eum laborum labore fugiat veritatis harum in!"
    item1.appendChild(item1h2);
    item1.appendChild(item1p)



    const item2 = document.createElement('div');
    item2.classList.add('menu-cat');
    const item2h2 = document.createElement('h2')
    item2h2.classList.add('menu-h2');
    item2h2.textContent = "Contact: ";
    const item2p1 = document.createElement('p');
    const item2p2 = document.createElement('p');
    const item2p3 = document.createElement('p');

    item2p1.textContent = "Name: Drew McIntyre";
    item2p2.textContent = "Phone: +51-555-2482-555";
    item2p3.textContent = "Email: sv@theburgerco.xxx";

    item2.appendChild(item2h2);
    item2.appendChild(item2p1);
    item2.appendChild(item2p2);
    item2.appendChild(item2p3);

    items.appendChild(item1);
    items.appendChild(item2);

    container.appendChild(items);

    return container;
}