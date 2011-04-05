
function Deck( card_types, shuffle_method ) {
    this.cards = card_types;
    this.deck = card_types;
    this.shuffleMethod = shuffle_method;
}

Deck.prototype.setShuffleMethod = function( shuffle_method ) {
    this.shuffleMethod = shuffle_method;
}

Deck.prototype.deal = function( num_cards ) {
    return this.cards.splice(0,num_cards);
};

Deck.prototype.shuffle = function( deck ) {
    return this.shuffleMethod( deck );
};


