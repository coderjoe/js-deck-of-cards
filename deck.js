/*
 * Take in an array of value ordered card types (from lowest to highest)
 * and a function pointer to a shuffle method which accepts an array of cards
 */
function Deck( card_types, shuffle_method ) {
    this.cards = card_types;
    this.deck = card_types;
    this.shuffleMethod = shuffle_method;
}

/*
 * Set the shuffle method outside of constructor
 */
Deck.prototype.setShuffleMethod = function( shuffle_method ) {
    this.shuffleMethod = shuffle_method;
}

/*
 * Deal a number of cards off of the deck
 */
Deck.prototype.deal = function( num_cards ) {
    return this.cards.splice(0,num_cards);
};

/*
 * Shuffle this deck
 */
Deck.prototype.shuffle = function() {
    //Call our functor with the "this" context of our Deck object.
    this.deck =  this.shuffleMethod.call( this );
};

/*
 * Reset the deck to an unshuffled state
 */
Deck.prototype.reset = function() {
    this.deck = this.cards;
};

/*
 * Just a namespace to store our shuffle methods
 * No real reason other than for fun
 *
 * Each shuffle method can assume it has access to
 * this.deck and this.
 */
var ShuffleMethod = {
    /*
     * A simple Math.random shuffle.
     * Semi-bias towards the original position thanks to the way the sort method works
     */
    randomShuffle: function() {
        console.log('Shuffling...');
        return this.deck.sort( function() { 
                return Math.floor(Math.random()*3+1)-2;
        } );
    }
};
