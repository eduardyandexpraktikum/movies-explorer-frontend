export function MoviesLayout() {

    const cardsAmount = { cards: 12, add: 3 };

    if (window.innerWidth < 800) {
        cardsAmount.cards = 8;
        cardsAmount.add = 2;
    }

    if (window.innerWidth < 480 || window.innerWidth > 320) {
        cardsAmount.cards = 5;
        cardsAmount.add = 2;
    }

    return cardsAmount;
};