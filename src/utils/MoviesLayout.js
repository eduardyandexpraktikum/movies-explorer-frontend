import { DESKTOP_LAYOUT_WIDTH, TABLET_LAYOUT_WIDTH, MOBILE_LAYOUT_WIDTH } from "./Constants";

export function MoviesLayout() {

    const cardsAmount = { cards: 12, add: 3 };

    if (window.innerWidth < DESKTOP_LAYOUT_WIDTH) {
        cardsAmount.cards = 12;
        cardsAmount.add = 3;
    }

    if (window.innerWidth < TABLET_LAYOUT_WIDTH) {
        cardsAmount.cards = 8;
        cardsAmount.add = 2;
    }

    if (window.innerWidth < MOBILE_LAYOUT_WIDTH) {
        cardsAmount.cards = 5;
        cardsAmount.add = 2;
    }

    return cardsAmount;
};