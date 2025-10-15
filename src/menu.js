export const menu = function () {
    const container = document.createElement('div');
    container.classList.add('menu', 'main-content');

    const items = document.createElement('div');
    items.classList.add('items');

    const item1 = document.createElement('div');
    item1.classList.add('menu-cat');
    const item1h2 = document.createElement('h2')
    item1h2.classList.add('menu-h2');
    item1h2.textContent = "Ramen";
    item1.appendChild(item1h2);

    const item2 = document.createElement('div');
    item2.classList.add('menu-cat');
    const item2h2 = document.createElement('h2')
    item2h2.classList.add('menu-h2');
    item2h2.textContent = "Burgers";
    item2.appendChild(item2h2);

    const item3 = document.createElement('div');
    item3.classList.add('menu-cat');
    const item3h2 = document.createElement('h2')
    item3h2.classList.add('menu-h2');
    item3h2.textContent = "Pizzas";
    item3.appendChild(item3h2);

    for (let i = 1; i <= 5; i++) {
        const p = document.createElement('p');
        p.classList.add('item-name');
        p.textContent = `Food Item ${i} : $${5+i}`
        item1.appendChild(p);
    }

    for (let i = 6; i <= 10; i++) {
        const p = document.createElement('p');
        p.classList.add('item-name');
        p.textContent = `Food Item ${i} : $${15-i}`
        item2.appendChild(p);
    }

    for (let i = 11; i <= 15; i++) {
        const p = document.createElement('p');
        p.classList.add('item-name');
        p.textContent = `Food Item ${i} : $${25-i}`
        item3.appendChild(p);
    }




    items.appendChild(item1);
    items.appendChild(item2);
    items.appendChild(item3);

    container.appendChild(items);

    return container;
}