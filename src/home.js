import oneimg from './img/korean-double-patty.jpg';
import twoimg from './img/korean-egg-ramen.jpg';
import threeimg from './img/korean-fish-ramen.jpg';
import fourimg from './img/korean-kimchi-burger.jpg';

export const home = function () {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('main-content', 'home');


    const koreanh2 = document.createElement('h2');
    koreanh2.classList.add('korean-range');
    koreanh2.textContent = "Introducing the All new Korean Range";

    const items = document.createElement('div');
    items.classList.add('items');

    homeContainer.appendChild(koreanh2);
    homeContainer.appendChild(items);

    class Card {
        constructor (imgSrc, imgAlt, h2TextContent, divDescription){
            this.imgSrc = imgSrc;
            this.imgAlt = imgAlt;
            this.h2TextContent = h2TextContent;
            this.divDescription = divDescription;
        }
    }

    const one = new Card(
        oneimg, 
        'korean double patty burger',
        'Korean Double Patty Burger',
        'The double juicy patties are going to make you want more'
    )

    const two = new Card(
        twoimg, 
        'Korean Egg and Miso Ramen',
        'Korean Egg and Miso Ramen',
        'A comforting ramen with soft-boiled egg, and savory umami flavors.'
    )

    const three = new Card(
        threeimg, 
        'Korean Kimchi Style Ramen',
        'Korean Kimchi Style Ramen',
        'Spicy ramen infused with tangy kimchi flavors and perfectly chewy noodles.'
    )

    const four = new Card(
        fourimg, 
        'Korean Kimchi Style burger',
        'Korean Kimchi Style burger',
        'Juicy burger topped with spicy kimchi, and bold Korean-inspired flavors.'
    )

    const all_cards = [one, two, three, four]

    for (let i = 0; i< all_cards.length; i++) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-img');
        image.src = all_cards[i].imgSrc;
        image.alt = all_cards[i].imgAlt;

        const cardh2 = document.createElement('h2');
        cardh2.classList.add('card-h2');
        cardh2.textContent = all_cards[i].h2TextContent;

        const desc = document.createElement('div')
        desc.classList.add('description');
        desc.textContent = all_cards[i].divDescription;

        cardContainer.appendChild(image);
        cardContainer.appendChild(cardh2);
        cardContainer.appendChild(desc)

        items.appendChild(cardContainer)
    }

    return homeContainer;
}