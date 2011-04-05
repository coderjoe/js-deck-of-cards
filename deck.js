/*
 * Take in an array of value ordered card types (from lowest to highest)
 * and a function pointer to a shuffle method which accepts an array of cards
 */
function Deck( card_types, shuffle_method ) {
    if( shuffle_method == undefined ) {
        throw 'Undefined Shuffle Method';
    }

    //Use slice to clone the array as opposed to storing a reference... making this.cards the same as this.deck
    this.cards = card_types.slice(0);
    this.deck = card_types.slice(0);
    this.shuffleMethod = shuffle_method;
}

/*
 * Set the shuffle method outside of constructor
 */
Deck.prototype.setShuffleMethod = function( shuffle_method ) {
    this.shuffleMethod = shuffle_method;
}

/*
 * Deal an array of cards cards off of the deck
 * If the deck is empty the array will be empty
 *
 */
Deck.prototype.deal = function( num_cards ) {
    return this.deck.splice(0,num_cards);
};

/*
 * Shuffle this deck
 */
Deck.prototype.shuffle = function() {
    this.deck =  this.shuffleMethod( this.deck );
};

/*
 * Reset the deck to an unshuffled state
 */
Deck.prototype.reset = function() {
    //clone the array as opposed to referencing
    this.deck = this.cards.slice(0);
};

/*
 * Display the ordinal value of a given card type in the deck
 */
Deck.prototype.valueOf = function( card ) {
    var i = this.cards.indexOf( card );
    if( i < 0 ) {
        throw 'InvalidCardException';
    }

    return i;
};

/*
 * Display the deck as a string of comma separated values
 */
Deck.prototype.toString = function() {
    return this.deck.join(', ');
};

/*
 * A utility function to help with the creation of decks with multiple suits
 */
Deck.builder = function( card_names, card_suits ) {
}
