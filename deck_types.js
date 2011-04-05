var DeckTypes = {
    silly: [ new Card(1,'cat','rocketship')
            ,new Card(2, 'moon', 't-rex')
            ,new Card(2,'bird', 'triceratops')
            ,new Card(3, 'car', 'fast')
            ,new Card(1000,'three','wild')
            ,new Card(5, 'basketball', 'globetrotter') ],

    poker: {
        ace_low: DeckBuilder.build(['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'],['Hearts','Diamonds','Spades','Clubs']),
        ace_high: DeckBuilder.build([2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'],['Hearts','Diamonds','Spades','Clubs']),
    },

    euchre: DeckBuilder.build([9,10,'Jack','Queen','King','Ace'],['Hearts','Diamonds','Spades','Clubs'])
};
