class Demo {
    constructor(cards) {
        this.cards = cards;
        this.decks = {
            H: [],
            D: [],
            S: [],
            C: []
        };
        this.fullDecks = 0;

        this.unshuffle();
    }

    unshuffle() {
        this.cards = this.cards.sort((a, b) => {
            return a - b;
        });

        this.cards.forEach((card) => {
            const suit = card.split('')[1];
            if(this.decks[suit].indexOf(card) < 0) {
                this.decks[suit].push(card);
                this.checkCompleteDeck();
            }
        })

        console.log(this.fullDecks);
    }

    checkCompleteDeck() {
        const suits = Object.keys(this.decks);
        let isComplete = true;

        suits.forEach((suit) => {
            if(this.decks[suit].length < 13) {
                isComplete = false;
            }
        });

        /*
        suits.forEach((suit) => {
            if(suit.length < 13) {
                isComplete = false;
                break;
            }
        });*/

        if(isComplete) {
            this.fullDecks++;
            this.decks = {
                H: [],
                D: [],
                S: [],
                C: []
            }
        }
    }


}

module.exports = Demo;