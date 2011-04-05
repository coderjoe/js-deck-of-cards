var DeckTypes = {
    silly: [ 'cat', 'moon', 'bird', 'car', 'three', 'basketball' ],

    poker: {
        ace_low: DeckBuilder.build(['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'],['Hearts','Diamonds','Spades','Clubs']),
        ace_high: DeckBuilder.build([2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'],['Hearts','Diamonds','Spades','Clubs']),
    },

    euchre: DeckBuilder.build([9,10,'Jack','Queen','King','Ace'],['Hearts','Diamonds','Spades','Clubs'])
};
